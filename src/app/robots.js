export default function robots() {
  const SITE_URL = "https://tech4logic.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
