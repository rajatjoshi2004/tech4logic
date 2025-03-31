export const generateSitemap = (data) => {
  const { static_links = "", product_links = "", category_links = "", updatedAt } = data.attributes;

  const allLinks = [
    ...static_links.split("\n").filter(Boolean),
    ...product_links.split("\n").filter(Boolean),
    ...category_links.split("\n").filter(Boolean),
  ];

  const lastModifiedDate = updatedAt ? new Date(updatedAt).toISOString() : new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allLinks
      .map((link) => {
        return `
    <url>
      <loc>${link.trim()}</loc>
      <lastmod>${lastModifiedDate}</lastmod>
      <priority>0.8</priority> <!-- Static priority, can adjust if needed -->
    </url>
    `;
      })
      .join("")}
  </urlset>`;

  return sitemap;
};
