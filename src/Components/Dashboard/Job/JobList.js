"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const router = useRouter();
  const jobsPerPage = 5;
  const dropdownRef = useRef(null);

  const fetchJobs = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/jobs/job-list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!data.success) throw new Error("Failed to fetch jobs");
      setJobs(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const confirmDelete = (id) => {
    setJobToDelete(id);
    setShowDeleteModal(true);
    setOpenDropdown(null);
    setDeleteSuccess(false);
  };

  const handleDelete = async () => {
    if (!jobToDelete) return;

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/jobs/delete-job/${jobToDelete}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      if (!data.success) throw new Error(data.message || "Failed to delete job");

      setDeleteSuccess(true);
      setError(null);
      fetchJobs(); // Refresh the list
    } catch (err) {
      setError(err.message);
      setDeleteSuccess(false);
    } finally {
      setShowDeleteModal(false);
      setJobToDelete(null);
    }
  };

  // Filter jobs based on search term and type filter
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || job.type === typeFilter;

    return matchesSearch && matchesType;
  });

  // Get current jobs for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === id ? null : id);
  };

  useEffect(() => {
    if (deleteSuccess) {
      const timer = setTimeout(() => {
        setDeleteSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [deleteSuccess]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
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
              Are you sure you want to delete this job posting? This action cannot be undone.
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
        <h2 className="text-xl font-bold text-white">Job Openings</h2>
        <button
          onClick={() => router.push("/admin/dashboard/job/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add New Job
        </button>
      </div>

      {/* Success and Error messages */}
      <div className="mt-4">
        {deleteSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Job deleted successfully!
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
              placeholder="Search by title or location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Type</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              value={typeFilter}
              onChange={(e) => {
                setTypeFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              {/* <option value="Internship">Internship</option>
              <option value="Remote">Remote</option> */}
            </select>
          </div>
        </div>

        {loading ? (
          <p className="text-center py-4">Loading jobs...</p>
        ) : (
          <>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Experience
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
                {currentJobs.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                      No jobs found
                    </td>
                  </tr>
                ) : (
                  currentJobs.map((job) => (
                    <tr key={job._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {job.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            job.type === "Full-time"
                              ? "bg-blue-100 text-blue-800"
                              : job.type === "Part-time"
                                ? "bg-green-100 text-green-800"
                                : job.type === "Contract"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : job.type === "Internship"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {job.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {job.experience}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(job.postedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div
                          className="relative inline-block text-left"
                          ref={openDropdown === job._id ? dropdownRef : null}
                        >
                          <div>
                            <button
                              type="button"
                              className="inline-flex justify-center w-full rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                              onClick={(e) => toggleDropdown(job._id, e)}
                              aria-expanded={openDropdown === job._id}
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

                          {openDropdown === job._id && (
                            <div
                              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                              role="menu"
                              aria-orientation="vertical"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="py-1">
                                <Link
                                  href={`/admin/dashboard/job/${job._id}`}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                >
                                  View Details
                                </Link>
                                <Link
                                  href={`/admin/dashboard/job/edit/${job._id}`}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => confirmDelete(job._id)}
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
                  ))
                )}
              </tbody>
            </table>

            {/* Pagination */}
            {filteredJobs.length > jobsPerPage && (
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstJob + 1}</span> to{" "}
                  <span className="font-medium">
                    {Math.min(indexOfLastJob, filteredJobs.length)}
                  </span>{" "}
                  of <span className="font-medium">{filteredJobs.length}</span> jobs
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
