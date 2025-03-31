export const metadata = {
    title: "Service Details | Tech4Logic",
    description:
      "Discover our comprehensive service offerings at Tech4Logic. Learn how we can help you achieve your business goals.",
    keywords: "Tech4Logic, Services, IT Solutions, Cloud Migration, Software Development",
    authors: [{ name: "Pankaj Kumar Meena" }],
    openGraph: {
      title: "Service Details | Tech4Logic",
      description:
        "Explore Tech4Logic's services tailored for your business needs, including IT solutions and cloud migration strategies.",
      url: "https://www.tech4logic.com/service/",
      images: [
        {
          url: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/tech4Logic.svg",
          width: 1200,
          height: 630,
          alt: "Tech4Logic Services",
        },
      ],
      siteName: "Tech4Logic",
    },
  };
  
  export default function ServiceLayout({ children }) {
    return <div>{children}</div>;
  }
  