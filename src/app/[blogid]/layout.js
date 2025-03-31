import { API_BASE_URL } from "@/constant/appConstants";

// Dynamically generate metadata for a blog
export async function generateMetadata({ params }) {
  const { blogid } = params;
  let metaData = {
    title: "Default Blog Title",
    description: "Default blog description",
    openGraph: {
      title: "Default Blog Title",
      description: "Default blog description",
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

  try {
    const response = await fetch(`${API_BASE_URL}/v1/service/get-blog-details/${blogid}`);
    if (!response.ok) throw new Error("Failed to fetch blog metadata");
    const { data } = await response.json();

    metaData = {
      title: data.title || "Default Blog Title",
      description: data.description || "Default blog description",
      openGraph: {
        title: data.title || "Default Blog Title",
        description: data.description || "Default blog description",
        url: `https://www.tech4logic.com/blog/${blogid}`,
        images: [
          {
            url: data.image || "/default-image.jpg",
            width: 1200,
            height: 630,
            alt: data.title || "Blog Image",
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  return metaData;
}

export default function BlogDetailsLayout({ children }) {
  return <div style={{ padding: "20px" }}>{children}</div>;
}
