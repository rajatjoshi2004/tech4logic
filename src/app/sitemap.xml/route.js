const BASE_URL = "https://tech4logic.com";

export const generateSitemap = (data) => {
  const { static_links = "", product_links = "", category_links = "", updatedAt } = data.attributes;

  const allLinks = [
    ...static_links.split("\n").filter(Boolean),
    ...product_links.split("\n").filter(Boolean),
    ...category_links.split("\n").filter(Boolean),
  ].map((link) => (link.trim() ? `${BASE_URL}${link.trim()}` : link));

  const lastModifiedDate = updatedAt ? new Date(updatedAt).toISOString() : new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allLinks
        .map((link) => {
          return `
      <url>
        <loc>${link}</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <priority>0.8</priority>
      </url>
      `;
        })
        .join("")}
    </urlset>`;

  return sitemap;
};

export async function GET() {
  const data = {
    data: {
      id: 1,
      attributes: {
        createdAt: "2024-09-09T05:04:16.164Z",
        updatedAt: "2024-09-09T07:51:04.004Z",
        publishedAt: "2024-09-09T05:04:17.282Z",
        static_links: `
            /privacy-policy
            /terms-and-conditions
            /contact
            /about
          `,
        product_links: `
            /services/Cloud/Alibaba
            /services/Cloud/AWS
            /services/Cloud/Google
          `,
        category_links: `
            /services/Software/Cisco
          `,
      },
    },
    meta: {},
  };

  const sitemap = generateSitemap(data.data);

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
