import "../styles/globals.css";
import AuthLayout from "./authLayout";

export const metadata = {
  title: "Tech4Logic | Manage Cloud Solutions, AWS, Azure, Google Cloud, Microsoft O365",
  description:
    "Tech4Logic provides cloud solutions including AWS, Azure, Google Cloud, and Microsoft O365 to help businesses scale and manage their cloud infrastructure.",
  url: "https://www.tech4logic.com",
  applicationName: "Tech4Logic",
  referrer: "origin-when-cross-origin",
  image: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/tech4Logic.svg",
  twitterHandle: "@Tech4Logic",
  authors: [{ name: "Pankaj Kumar Meena" }],
  creator: "Pankaj Kumar Meena",
  publisher: "Pankaj Kumar Meena",
  keywords: [
    "Cloud Solutions",
    "AWS",
    "Azure",
    "Google Cloud",
    "Microsoft O365",
    "Tech4Logic",
    "Cloud Management",
  ],
  twitter: {
    cardType: "summary_large_image",
    handle: "@Tech4Logic",
  },
  openGraph: {
    title: "Tech4Logic | Manage Cloud Solutions, AWS, Azure, Google Cloud, Microsoft O365",
    description:
      "Tech4Logic provides cloud solutions including AWS, Azure, Google Cloud, and Microsoft O365 to help businesses scale and manage their cloud infrastructure.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/tech4Logic.svg",
        width: 600,
        height: 600,
        alt: "Tech4Logic Icon",
      },
    ],
    siteName: "Tech4Logic",
    authors: ["Pankaj Kumar Meena"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body className="antialiased font-poppins">
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
