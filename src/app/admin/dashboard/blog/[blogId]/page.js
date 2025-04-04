"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";

export default function BlogDetailView() {
  const router = useRouter();
  useEffect(() => {
    // Check for token on component mount
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin");
    }
  }, [router]);
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authentication required");
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/blogs/blog-details/${blogId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || "Failed to fetch blog details");
        }

        setBlog(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
        <button
          onClick={() => router.back()}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          Blog not found
        </div>
        <button
          onClick={() => router.back()}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6 mt-24">
        <h1 className="text-2xl font-bold text-white">{blog.title}</h1>
        <div className="flex space-x-2">
          <Link
            href={`/admin/dashboard/blog/edit/${blog._id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Edit
          </Link>
          <Link
            href="/admin/dashboard/blog"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Back to Blogs
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Image Section - Displayed in original aspect ratio */}
       
        {blog.image && (
          <div className="w-full flex justify-start p-6 -mb-4">
            <img
              // src={"https://tech4logic-images.s3.ap-south-1.amazonaws.com/blog-images/1743761341123_balance.jpg"}
              src={blog.image}
              alt={blog.title}
              className="max-w-full h-auto"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-sm text-gray-500">Posted: </span>
              <span className="text-sm font-medium">
                {format(new Date(blog.postedAt), "MMMM d, yyyy h:mm a")}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Likes:</span>
              <span className="text-sm font-medium">{blog.likeCount}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{blog.description}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags && blog.tags.length > 0 ? (
                blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-sm text-gray-500">No tags</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
            <div>
              <span className="font-medium">Created: </span>
              {format(new Date(blog.createdAt), "MMMM d, yyyy h:mm a")}
            </div>
            <div>
              <span className="font-medium">Last Updated: </span>
              {format(new Date(blog.updatedAt), "MMMM d, yyyy h:mm a")}
            </div>
            <div>
              <span className="font-medium">ID: </span>
              {blog._id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}