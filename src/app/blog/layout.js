export const metadata = {
  title: "Blogs | Tech4Logic",
  description:
    "Explore insightful articles and resources on technology, software development, and IT solutions from Tech4Logic.",
  keywords: [
    "Tech4Logic",
    "Blogs",
    "Technology Insights",
    "Software Development",
    "IT Solutions",
    "Cloud Migration",
  ].join(", "),
  authors: [{ name: "Pankaj Kumar Meena" }],
  openGraph: {
    title: "Blogs | Tech4Logic",
    description:
      "Discover the latest articles and insights on technology solutions, software development, and IT infrastructure from Tech4Logic.",
    url: "https://www.tech4logic.com/blogs",
    images: [
      {
        url: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/tech4Logic.svg",
        width: 1200,
        height: 630,
        alt: "Tech4Logic Blogs",
      },
    ],
  },
};

export default function BlogLayout({ children }) {
  return <div style={{ padding: "20px" }}>{children}</div>;
}
