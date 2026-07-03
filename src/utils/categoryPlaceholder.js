/**
 * Returns the effective display image URL for an article:
 * its own image_url if present, otherwise an assigned placeholder.
 *
 * @param {Object} article
 * @returns {string|null}
 */
export function getArticleImage(article) {
  return article.image_url || article.placeholderImage || null
}
