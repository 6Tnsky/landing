import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(process.cwd(), 'public', 'img')

const targets = [
  { name: 'B3_2', maxWidth: 1200, quality: 82 },
  { name: 'B8_1', maxWidth: 1200, quality: 82 },
]

async function fileSize(p) {
  const st = await fs.stat(p)
  return st.size
}

function fmt(bytes) {
  const mb = bytes / 1024 / 1024
  if (mb >= 1) return `${mb.toFixed(2)}MB`
  const kb = bytes / 1024
  return `${kb.toFixed(0)}KB`
}

async function run() {
  for (const t of targets) {
    const input = path.join(ROOT, `${t.name}.png`)
    const output = path.join(ROOT, `${t.name}.webp`)

    const before = await fileSize(input)

    await sharp(input)
      .resize({ width: t.maxWidth, withoutEnlargement: true })
      .webp({ quality: t.quality })
      .toFile(output)

    const after = await fileSize(output)
    // eslint-disable-next-line no-console
    console.log(`${t.name}: ${fmt(before)} -> ${fmt(after)}`)
  }
}

run().catch((e) => {
  // eslint-disable-next-line no-console
  console.error(e)
  process.exit(1)
})

