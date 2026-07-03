import fs from "fs"
import path from "path"

const PLACEHOLDER_BASE = "/placeholders"
const PLACEHOLDER_DIR = path.join(process.cwd(), "public/placeholders")
const PLACEHOLDER_PATTERN = /^(.+)-(\d+)\.(png|jpe?g|webp)$/i

let cachedPlaceholderFiles

function getPlaceholderFilesByCategory() {
  if (cachedPlaceholderFiles) return cachedPlaceholderFiles

  const grouped = {}

  if (!fs.existsSync(PLACEHOLDER_DIR)) {
    cachedPlaceholderFiles = grouped
    return grouped
  }

  for (const file of fs.readdirSync(PLACEHOLDER_DIR)) {
    const match = file.match(PLACEHOLDER_PATTERN)
    if (!match) continue

    const slug = match[1].toLowerCase()
    const order = Number(match[2])

    if (!grouped[slug]) grouped[slug] = []
    grouped[slug].push({ file, order })
  }

  for (const slug of Object.keys(grouped)) {
    grouped[slug] = grouped[slug]
      .sort((a, b) => a.order - b.order || a.file.localeCompare(b.file))
      .map(item => item.file)
  }

  cachedPlaceholderFiles = grouped
  return grouped
}

export function assignCategoryPlaceholders(articles = []) {
  const placeholderFiles = getPlaceholderFilesByCategory()
  const counters = {}

  return articles.map(article => {
    if (!article || article.image_url) return article

    const slug = article.category?.slug?.toLowerCase()
    if (!slug) return article

    const files = placeholderFiles[slug]
    if (!files || files.length === 0) return article

    if (counters[slug] === undefined) counters[slug] = 0
    const idx = counters[slug]
    counters[slug] = (idx + 1) % files.length

    return {
      ...article,
      placeholderImage: `${PLACEHOLDER_BASE}/${encodeURIComponent(files[idx])}`,
    }
  })
}

export function assignCategoryPlaceholder(article) {
  return assignCategoryPlaceholders(article ? [article] : [])[0] || article
}