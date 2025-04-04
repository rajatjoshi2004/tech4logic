"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BlogDetail() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagFilter, setTagFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const router = useRouter();
  const blogsPerPage = 5;

  // Add a ref to track dropdown containers
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Improved click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const fetchBlogs = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/blogs/blog-list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!data.success) throw new Error("Failed to fetch blogs");
      setBlogs(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (id) => {
    setBlogToDelete(id);
    setShowDeleteModal(true);
    setOpenDropdown(null);
    setDeleteSuccess(false);
  };

  const handleDelete = async () => {
    if (!blogToDelete) return;

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/blogs/delete-blog/${blogToDelete}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      if (!data.success) throw new Error(data.message || "Failed to delete blog");

      setDeleteSuccess(true);
      setError(null);
      fetchBlogs(); // Refresh the list
    } catch (err) {
      setError(err.message);
      setDeleteSuccess(false);
    } finally {
      setShowDeleteModal(false);
      setBlogToDelete(null);
    }
  };

  // Get all unique tags for filter
  const allTags = ["all"];
  blogs.forEach((blog) => {
    if (blog.tags && blog.tags.length > 0) {
      // Handle both stringified array and normal array
      const tags =
        typeof blog.tags[0] === "string" && blog.tags[0].startsWith('["')
          ? JSON.parse(blog.tags[0])
          : blog.tags;

      tags.forEach((tag) => {
        if (!allTags.includes(tag)) allTags.push(tag);
      });
    }
  });

  // Filter blogs based on search term and tag filter
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.description && blog.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag =
      tagFilter === "all" ||
      (blog.tags &&
        blog.tags.some((tag) => {
          if (typeof tag === "string" && tag.startsWith('["')) {
            return JSON.parse(tag).includes(tagFilter);
          }
          return tag === tagFilter;
        }));

    return matchesSearch && matchesTag;
  });

  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Improved toggle dropdown function
  const toggleDropdown = (id, e) => {
    e.stopPropagation(); // Prevent the click from reaching the document listener
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Add this in your useEffect section
  useEffect(() => {
    // If success message is shown, hide it after 3 seconds
    if (deleteSuccess) {
      const timer = setTimeout(() => {
        setDeleteSuccess(false);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Clean up on unmount
    }
  }, [deleteSuccess]);

  // Similar effect for error messages
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="container mx-auto p-6">
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete this blog? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-24">
        <h2 className="text-xl font-bold text-white">Blogs List</h2>
        <button
          onClick={() => router.push("/admin/dashboard/blog/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add New Blog
        </button>
      </div>

      {/* Success and Error messages */}
      <div className="mt-4">
        {deleteSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Blog deleted successfully!
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Search</label>
            <input
              type="text"
              placeholder="Search by title or description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tag</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              value={tagFilter}
              onChange={(e) => {
                setTagFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <p className="text-center py-4">Loading blogs...</p>
        ) : (
          <>
            <div className="overflow-y-auto w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th> */}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tags
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Posted At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentBlogs.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                        No blogs found
                      </td>
                    </tr>
                  ) : (
                    currentBlogs.map((blog) => {
                      // Parse tags if they're stringified arrays
                      const tags =
                        blog.tags && blog.tags.length > 0
                          ? typeof blog.tags[0] === "string" && blog.tags[0].startsWith('["')
                            ? JSON.parse(blog.tags[0])
                            : blog.tags
                          : [];

                      return (
                        <tr key={blog._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {blog.title}
                          </td>
                          {/* <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                          {blog.description}
                        </td> */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1"
                              >
                                {tag}
                              </span>
                            ))}
                            {tags.length > 2 && (
                              <span className="text-xs text-gray-500">+{tags.length - 2} more</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(blog.postedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div
                              className="relative inline-block text-left"
                              ref={openDropdown === blog._id ? dropdownRef : null}
                            >
                              <div>
                                <button
                                  type="button"
                                  className="inline-flex justify-center w-full rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                                  onClick={(e) => toggleDropdown(blog._id, e)}
                                  aria-expanded={openDropdown === blog._id}
                                  aria-haspopup="true"
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                  </svg>
                                </button>
                              </div>

                              {openDropdown === blog._id && (
                                <div
                                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                                  role="menu"
                                  aria-orientation="vertical"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <div className="py-1">
                                    <Link
                                      href={`/admin/dashboard/blog/${blog._id}`}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                      role="menuitem"
                                    >
                                      View Details
                                    </Link>
                                    <Link
                                      href={`/admin/dashboard/blog/edit/${blog._id}`}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                      role="menuitem"
                                    >
                                      Edit
                                    </Link>
                                    <button
                                      onClick={() => confirmDelete(blog._id)}
                                      className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-900"
                                      role="menuitem"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredBlogs.length > blogsPerPage && (
              <div className="flex flex-col md:flex-row gap-3 items-center justify-between mt-4">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstBlog + 1}</span> to{" "}
                  <span className="font-medium">
                    {Math.min(indexOfLastBlog, filteredBlogs.length)}
                  </span>{" "}
                  of <span className="font-medium">{filteredBlogs.length}</span> blogs
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-3 py-1 rounded ${currentPage === number ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                    >
                      {number}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
