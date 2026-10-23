import type { APIRoute } from 'astro';
import { getStore } from '@netlify/blobs';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const GET: APIRoute = async () => {
    try {
        const store = getStore('subscribers');
        const listResult = await store.list();
        const subscribers = [];
        for (const item of listResult.blobs || []) {
            try {
                const record = await store.get(item.key, { type: 'json' });
                if (record) subscribers.push(record);
            } catch {
                // Skip unreadable blob entry
            }
        }
        return new Response(
            JSON.stringify({ ok: true, subscribers }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store'
                }
            }
        );
    } catch {
        return new Response(
            JSON.stringify({ ok: true, subscribers: [] }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    }
};

export const POST: APIRoute = async ({ request }) => {
    try {
        let email = '';
        let firstName = '';
        let source = 'website';

        const contentType = request.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
            const body = await request.json();
            email = String(body.email || body.email_address || '').trim().toLowerCase();
            firstName = String(body.firstName || body.first_name || '').trim();
            source = String(body.source || 'website').trim();
        } else {
            const formData = await request.formData();
            email = String(formData.get('email') || formData.get('email_address') || '').trim().toLowerCase();
            firstName = String(formData.get('firstName') || formData.get('first_name') || '').trim();
            source = String(formData.get('source') || 'website').trim();
        }

        if (!email || !EMAIL_REGEX.test(email)) {
            return new Response(
                JSON.stringify({ ok: false, error: 'Please enter a valid email address.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const subscribedAt = new Date().toISOString();

        // 1. Persist in Netlify Blobs store when running on Netlify
        try {
            const store = getStore('subscribers');
            await store.setJSON(email, {
                email,
                firstName,
                source,
                subscribedAt,
                unsubscribed: false
            });
        } catch {
            // Non-fatal if local dev environment lacks Netlify Blob context
        }

        // 2. Forward to our primary Resend + Study Desk dispatch bridge
        let bridgeOk = false;
        const bridgeUrls = [
            'https://chess.gutierrezwald.com/api/florecer-subscribe',
            'https://talk.gutierrezwald.com/api/florecer-subscribe'
        ];
        for (const bridgeUrl of bridgeUrls) {
            try {
                const bridgeResp = await fetch(bridgeUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
                    },
                    body: JSON.stringify({ email, firstName, source })
                });
                if (bridgeResp.ok) {
                    const bridgeData = await bridgeResp.json();
                    if (bridgeData?.ok) {
                        bridgeOk = true;
                        break;
                    }
                }
            } catch {
                // Try next bridge URL
            }
        }

        // 3. Direct Resend fallback if RESEND_API_KEY is present in Netlify env
        const resendKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
        if (!bridgeOk && resendKey) {
            try {
                await fetch('https://api.resend.com/audiences/b9416906-ae4a-4702-9eb0-61f573039a3c/contacts', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${resendKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        first_name: firstName || undefined,
                        unsubscribed: false
                    })
                });
            } catch {
                // Ignore secondary fallback errors
            }
        }

        return new Response(
            JSON.stringify({
                ok: true,
                email,
                bridgeOk,
                message: 'You are subscribed to Florecer Mind. Your welcome essay is on its way to your inbox.'
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store'
                }
            }
        );
    } catch {
        return new Response(
            JSON.stringify({
                ok: false,
                error: 'We could not complete your subscription right now. Please try again in a moment.'
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
};
