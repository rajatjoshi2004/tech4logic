export const metadata = {
  title: "Careers | Tech4Logic",
  description:
    "Join Tech4Logic and be part of an innovative team that delivers cutting-edge technology solutions. Explore our current job openings and career growth opportunities.",
  keywords: [
    "Tech4Logic",
    "Careers",
    "Job Openings",
    "Technology Jobs",
    "Software Development Careers",
    "IT Careers",
  ].join(", "),
  authors: [{ name: "Pankaj Kumar Meena" }],
  openGraph: {
    title: "Careers | Tech4Logic",
    description:
      "Explore exciting career opportunities at Tech4Logic. Discover how you can contribute to our innovative technology solutions.",
    url: "https://www.tech4logic.com/careers",
    images: [
      {
        url: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/tech4Logic.svg",
        width: 1200,
        height: 630,
        alt: "Careers at Tech4Logic",
      },
    ],
  },
};

export default function CareersLayout({ children }) {
  return <div style={{ padding: "20px" }}>{children}</div>;
}
