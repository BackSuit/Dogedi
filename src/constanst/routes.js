export const HOME_ROUTE = "/"
export const ARTICLE_ROUTE = "/article"
export const MAGAZINE_ROUTE = "/magazine"
export const ENTERTAINMENT_ROUTE = "/entertainment"
export const AUTHORS_ROUTE = "/authors"
export const ABOUT_US_ROUTE = "/about-us"
export const MEET_THE_TEAM_ROUTE = "/meet-the-team"
export const CATEGORIES_ROUTE = "/category"

export const ARTICLE_ID_ROUTE = id => `${ARTICLE_ROUTE}/${id}`
export const CATEGORY_ID_ROUTE = id => `${CATEGORIES_ROUTE}/${id}`
export const AUTHOR_ID_ROUTE = id => `${AUTHORS_ROUTE}/${id}`
export const ARTICLE_PAGE_ROUTE = page => `${ARTICLE_ROUTE}/page/${page}`

// Generate navigation links from categories
export const getNavigationLinks = (categories = []) => {
  const links = [
    {
      name: "Home",
      to: HOME_ROUTE,
    },
  ]

  // Add all category links to navbar
  categories.forEach(category => {
    links.push({
      name: category.name,
      to: CATEGORY_ID_ROUTE(category.slug),
    })
  })

  return links
}

// Default navigation links (used as fallback)
export const navigationLinks = [
  {
    name: "Home",
    to: HOME_ROUTE,
  },
]

// Footer links - organized for a scholarship/fellowship website
export const footerLinks = [
  { name: "Home", path: HOME_ROUTE },
  { name: "All Opportunities", path: ARTICLE_ROUTE },
  { name: "Scholarships", path: CATEGORY_ID_ROUTE("scholarships") },
  { name: "Fellowships", path: CATEGORY_ID_ROUTE("fellowships") },
  { name: "Grants & Funding", path: CATEGORY_ID_ROUTE("grants-funding") },
  { name: "About Us", path: ABOUT_US_ROUTE },
]

// Additional footer category links
export const footerCategoryLinks = [
  { name: "Study Abroad", path: CATEGORY_ID_ROUTE("study-abroad") },
  { name: "Career Development", path: CATEGORY_ID_ROUTE("career-development") },
  { name: "Success Stories", path: CATEGORY_ID_ROUTE("success-stories") },
  { name: "Application Tips", path: CATEGORY_ID_ROUTE("application-tips") },
  { name: "Resources", path: CATEGORY_ID_ROUTE("resources") },
  { name: "Funding News", path: CATEGORY_ID_ROUTE("funding-news") },
]
