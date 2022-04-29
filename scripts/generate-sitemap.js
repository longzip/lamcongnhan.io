const fs = require('fs')
const globby = require('globby')
const API_URL = process.env.WORDPRESS_API_URL


function addPage(page) {
  const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
    }
  
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }

async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    return data?.posts
  }

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '!pages/_*.js',
    '!pages/posts/[slug].js',
    '!pages/api',
  ])
  const allPosts = await getAllPostsWithSlug()

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...pages, ...allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || []].map(addPage).join('\n')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()