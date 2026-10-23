import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const BLOG_DIR = '/Users/florecer/getflorecer-blog/src/content/blog';
const OUTPUT_DIR = '/Users/florecer/getflorecer-blog/public/audio';
const EDGE_VOICE = 'en-US-AvaMultilingualNeural';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

export function cleanMarkdownForNarration(rawMarkdown, meta = {}) {
  let text = rawMarkdown.replace(/^---[\s\S]*?---\n*/, '');

  let intro = '';
  if (meta.title) {
    intro += meta.title + '.\n\n';
  }
  if (meta.description) {
    intro += meta.description + '\n\n';
  }

  text = intro + text;

  // Clean code blocks
  text = text.replace(/```[\s\S]*?```/g, '');
  text = text.replace(/`([^`]+)`/g, '$1');

  // Clean HTML
  text = text.replace(/<[^>]+>/g, ' ');

  // Clean markdown links [label](url) -> label
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, '');

  // Clean footnotes
  text = text.replace(/\[\^?\d+\]/g, '');

  // Clean horizontal rules
  text = text.replace(/^\s*[-*_]{3,}\s*$/gm, '');

  // Clean headers
  text = text.replace(/^(#{1,6})\s*(.+)$/gm, (m, hashes, title) => {
    const clean = title.trim();
    return /[.!?]$/.test(clean) ? `${clean}\n\n` : `${clean}.\n\n`;
  });

  // Bullets to sentences
  text = text.replace(/^\s*[-*+]\s+(.+)$/gm, '$1.\n');
  text = text.replace(/^\s*\d+\.\s+(.+)$/gm, '$1.\n');

  // Blockquotes
  text = text.replace(/^\s*>\s*/gm, '');

  // Bold & italics
  text = text.replace(/(\*\*|__)(.*?)\1/g, '$2');
  text = text.replace(/(\*|_)(.*?)\1/g, '$2');

  // Tables
  text = text.replace(/^\s*\|.*\|\s*$/gm, '');

  // Spacing
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.replace(/[ \t]+/g, ' ');

  return text.trim();
}

function runEdgeTts(text, outputPath) {
  return new Promise((resolve, reject) => {
    const tempTxt = outputPath.replace(/\.mp3$/, '.temp.txt');
    fs.writeFileSync(tempTxt, text, 'utf8');

    const proc = spawn('edge-tts', [
      '--voice', EDGE_VOICE,
      '--file', tempTxt,
      '--write-media', outputPath
    ], { stdio: 'inherit' });

    proc.on('close', (code) => {
      if (fs.existsSync(tempTxt)) fs.unlinkSync(tempTxt);
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`edge-tts exited with code ${code}`));
      }
    });

    proc.on('error', (err) => {
      if (fs.existsSync(tempTxt)) fs.unlinkSync(tempTxt);
      reject(err);
    });
  });
}

async function main() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md')).sort();
  console.log(`Starting generation for ${files.length} articles...`);

  const manifest = {};

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(fullPath, 'utf8');

    let title = slug;
    let description = '';
    const titleMatch = content.match(/^title:\s*["']?(.*?)["']?$/m);
    if (titleMatch) title = titleMatch[1];
    const descMatch = content.match(/^description:\s*["']?(.*?)["']?$/m);
    if (descMatch) description = descMatch[1];

    const destPath = path.join(OUTPUT_DIR, `${slug}.mp3`);
    console.log(`\n🎙️ [${i + 1}/${files.length}] Synthesizing ${slug}...`);

    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 50000) {
      console.log(`   ⏭️ Already exists (${Math.round(fs.statSync(destPath).size / 1024)} KB)`);
    } else {
      const cleanText = cleanMarkdownForNarration(content, { title, description });
      await runEdgeTts(cleanText, destPath);
      console.log(`   ✅ Created ${slug}.mp3 (${Math.round(fs.statSync(destPath).size / 1024)} KB)`);
    }

    const stats = fs.statSync(destPath);
    manifest[slug] = {
      audioUrl: `/audio/${slug}.mp3`,
      sizeBytes: stats.size,
      title,
      voice: EDGE_VOICE,
      updatedAt: new Date().toISOString()
    };
  }

  const manifestPath = path.join(OUTPUT_DIR, 'audio-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n🎉 Success! All ${files.length} audio files generated. Manifest written to ${manifestPath}`);
}

main().catch(err => {
  console.error('Fatal generation error:', err);
  process.exit(1);
});
