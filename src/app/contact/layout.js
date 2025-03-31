export const metadata = {
  title: "Contact Us | Tech4Logic",
  description:
    "Get in touch with Tech4Logic for innovative technology solutions and cloud migration strategies. We are here to assist you with your inquiries.",
  keywords: "Tech4Logic, Contact Us, Technology Solutions, Cloud Migration, IT Support",
  authors: [{ name: "Pankaj Kumar Meena" }],
  openGraph: {
    title: "Contact Us | Tech4Logic",
    description:
      "Reach out to Tech4Logic for your software development and IT infrastructure needs. We look forward to hearing from you.",
    url: "https://www.tech4logic.com/contact",
    images: [
      {
        url: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/tech4Logic.svg",
        width: 1200,
        height: 630,
        alt: "Contact Tech4Logic",
      },
    ],
  },
};

export default function ContactLayout({ children }) {
  return <div>{children}</div>;
}
