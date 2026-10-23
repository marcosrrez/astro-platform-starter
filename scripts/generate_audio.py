import asyncio
import os
import re
import json
import time
import edge_tts

BLOG_DIR = '/Users/florecer/getflorecer-blog/src/content/blog'
OUTPUT_DIR = '/Users/florecer/getflorecer-blog/public/audio'
VOICE = 'en-US-AvaMultilingualNeural'

os.makedirs(OUTPUT_DIR, exist_ok=True)

def clean_markdown_for_narration(raw_md, title='', description=''):
    text = re.sub(r'^---[\s\S]*?---\n*', '', raw_md)
    intro = ''
    if title:
        intro += f"{title}.\n\n"
    if description:
        intro += f"{description}\n\n"
    text = intro + text

    # Remove code blocks
    text = re.sub(r'```[\s\S]*?```', '', text)
    text = re.sub(r'`([^`]+)`', r'\1', text)

    # Remove HTML tags
    text = re.sub(r'<[^>]+>', ' ', text)

    # Remove markdown links [label](url) -> label
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)
    text = re.sub(r'!\[[^\]]*\]\([^)]+\)', '', text)

    # Remove footnotes
    text = re.sub(r'\[\^?\d+\]', '', text)

    # Remove horizontal rules
    text = re.sub(r'^\s*[-*_]{3,}\s*$', '', text, flags=re.MULTILINE)

    # Headers
    def replace_header(match):
        header_text = match.group(2).strip()
        if header_text.endswith(('.', '!', '?')):
            return f"{header_text}\n\n"
        return f"{header_text}.\n\n"

    text = re.sub(r'^(#{1,6})\s*(.+)$', replace_header, text, flags=re.MULTILINE)

    # Lists
    text = re.sub(r'^\s*[-*+]\s+(.+)$', r'\1.\n', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*\d+\.\s+(.+)$', r'\1.\n', text, flags=re.MULTILINE)

    # Quotes
    text = re.sub(r'^\s*>\s*', '', text, flags=re.MULTILINE)

    # Formatting
    text = re.sub(r'(\*\*|__)(.*?)\1', r'\2', text)
    text = re.sub(r'(\*|_)(.*?)\1', r'\2', text)

    # Tables
    text = re.sub(r'^\s*\|.*\|\s*$', '', text, flags=re.MULTILINE)

    # Spacing
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()

async def synthesize_one(slug, content, title, description, index, total):
    dest_path = os.path.join(OUTPUT_DIR, f"{slug}.mp3")
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 50000:
        print(f"[{index}/{total}] ⏭️ {slug} already exists ({round(os.path.getsize(dest_path)/1024)} KB)")
        return slug, os.path.getsize(dest_path)

    print(f"[{index}/{total}] 🎙️ Synthesizing {slug}...")
    t0 = time.time()
    clean_text = clean_markdown_for_narration(content, title, description)
    comm = edge_tts.Communicate(clean_text, VOICE)
    await comm.save(dest_path)
    elapsed = round(time.time() - t0, 1)
    size_kb = round(os.path.getsize(dest_path) / 1024)
    print(f"[{index}/{total}] ✅ Finished {slug} in {elapsed}s ({size_kb} KB)")
    return slug, os.path.getsize(dest_path)

async def main():
    files = sorted([f for f in os.listdir(BLOG_DIR) if f.endswith('.md')])
    print(f"Synthesizing {len(files)} articles using Edge-TTS {VOICE}...")

    manifest = {}
    for i, file in enumerate(files, 1):
        slug = file[:-3]
        full_path = os.path.join(BLOG_DIR, file)
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()

        title_match = re.search(r'^title:\s*["\']?(.*?)["\']?$', content, re.MULTILINE)
        title = title_match.group(1) if title_match else slug
        desc_match = re.search(r'^description:\s*["\']?(.*?)["\']?$', content, re.MULTILINE)
        description = desc_match.group(1) if desc_match else ''

        _, size = await synthesize_one(slug, content, title, description, i, len(files))
        manifest[slug] = {
            "audioUrl": f"/audio/{slug}.mp3",
            "sizeBytes": size,
            "title": title,
            "voice": VOICE,
            "updatedAt": time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
        }

    manifest_path = os.path.join(OUTPUT_DIR, "audio-manifest.json")
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)
    print(f"\n🎉 All {len(files)} audio files synthesized successfully!")

if __name__ == '__main__':
    asyncio.run(main())
