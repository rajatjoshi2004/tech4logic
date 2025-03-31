export const metadata = {
  title: "About Us | Tech4Logic",
  description:
    "Tech4Logic manages cost and value innovation solutions for organizations across various sectors. Learn about our journey since 2014 and our expertise in software development, IT infrastructure, and cloud solutions.",
  keywords: [
    "Tech4Logic",
    "About Us",
    "Software Development",
    "IT Solutions",
    "Cloud Migration",
    "Project Management",
  ].join(", "),
  authors: [{ name: "Pankaj Kumar Meena" }],
  openGraph: {
    title: "About Us | Tech4Logic",
    description:
      "Tech4Logic provides innovative technology solutions and cloud migration strategies for organizations. Discover our experience in software development and IT infrastructure.",
    url: "https://www.tech4logic.com/about",
    images: [
      {
        url: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/tech4Logic.svg",
        width: 1200,
        height: 630,
        alt: "About Tech4Logic",
      },
    ],
  },
};

export default function AboutLayout({ children }) {
  return <div>{children}</div>;
}
