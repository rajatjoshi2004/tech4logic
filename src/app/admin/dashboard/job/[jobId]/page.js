"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function JobDetailPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    // Check for token on component mount
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin");
    }
  }, [router]);

  useEffect(() => {
    fetchJobDetails();
  }, [jobId]);

  const fetchJobDetails = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/jobs/job-details/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      if (!data.success) throw new Error("Failed to fetch job details");
      setJob(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading)
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );

  if (!job)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Job not found</p>
      </div>
    );

  return (
    <div className="container mx-auto p-6 mt-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Job Details</h1>
        <Link
          href="/admin/dashboard/jobs"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back to Jobs
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex">
                  <span className="font-medium w-32">Job Title:</span>
                  <span className="font-semibold">{job.title}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Job Type:</span>
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      job.type === "Full-time"
                        ? "bg-blue-500"
                        : job.type === "Part-time"
                          ? "bg-green-500"
                          : job.type === "Contract"
                            ? "bg-yellow-500"
                            : job.type === "Internship"
                              ? "bg-purple-500"
                              : "bg-gray-500"
                    }`}
                  >
                    {job.type}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Location:</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Work Hours:</span>
                  <span>{job.workHours}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Experience:</span>
                  <span>{job.experience}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Timeline</h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex">
                  <span className="font-medium w-32">Posted At:</span>
                  <span>{formatDate(job.postedAt)}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Created At:</span>
                  <span>{formatDate(job.createdAt)}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Last Updated:</span>
                  <span>{formatDate(job.updatedAt)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="whitespace-pre-line">{job.description}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Job Details</h2>
              <ul className="list-disc pl-5 space-y-2 bg-gray-50 p-4 rounded-md">
                {job.details && job.details.length > 0 ? (
                  job.details.map((detail, index) => <li key={index}>{detail}</li>)
                ) : (
                  <li>No details provided</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
