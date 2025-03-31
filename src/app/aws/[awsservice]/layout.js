export const metadata = {
  title: "AWS Service Details | Tech4Logic",
  description:
    "Explore our comprehensive AWS service offerings, tailored to enhance your cloud solutions and infrastructure management.",
  keywords: "Tech4Logic, AWS Services, Cloud Solutions, AWS Management, IT Support",
  authors: [{ name: "Pankaj Kumar Meena" }],
  openGraph: {
    title: "AWS Service Details | Tech4Logic",
    description:
      "Discover Tech4Logic's AWS services, designed to help businesses with cloud migration and management.",
    url: "https://www.tech4logic.com/aws/[servicename]",
    images: [
      {
        url: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/tech4Logic.svg",
        width: 1200,
        height: 630,
        alt: "AWS Service Details by Tech4Logic",
      },
    ],
  },
};

export default function AWSServiceLayout({ children }) {
  return <div>{children}</div>;
}
