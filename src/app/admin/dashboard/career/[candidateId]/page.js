"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function CandidateDetailPage() {
  const { candidateId } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchCandidateDetails();
  }, [candidateId]);

  const fetchCandidateDetails = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/career/candidate-details/${candidateId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      if (!data.success) throw new Error("Failed to fetch candidate details");
      setCandidate(data.data);
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

  const handleStatusChange = async (newStatus) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Authentication required");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/career/update-candidate/${candidateId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to update status");

      setUpdateSuccess(true);
      setTimeout(() => setUpdateSuccess(false), 3000);
      fetchCandidateDetails();
    } catch (err) {
      setError(err.message);
    }
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

  if (!candidate)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Candidate not found</p>
      </div>
    );

  return (
    <div className="container mx-auto p-6 mt-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Candidate Details</h1>
        <Link
          href="/admin/dashboard/candidates"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back to List
        </Link>
      </div>

      {updateSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Candidate status updated successfully!
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex">
                  <span className="font-medium w-32">Full Name:</span>
                  <span>{candidate.fullName}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Email:</span>
                  <span>{candidate.email}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Phone:</span>
                  <span>{candidate.phone}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Location:</span>
                  <span>{candidate.location}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Address:</span>
                  <span>{candidate.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Professional Information</h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex">
                  <span className="font-medium w-32">Experience:</span>
                  <span>{candidate.experience}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Current CTC:</span>
                  <span>
                    {typeof candidate.currentCTC === "number"
                      ? candidate.currentCTC.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : candidate.currentCTC}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Expected CTC:</span>
                  <span>
                    {typeof candidate.expectedCTC === "number"
                      ? candidate.expectedCTC.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                      : candidate.expectedCTC}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Job Type:</span>
                  <span>{candidate.jobType}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Application Status</h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center">
                  <span className="font-medium w-32">Status:</span>
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      candidate.status === "Not Viewed"
                        ? "bg-gray-500"
                        : candidate.status === "Under Review"
                          ? "bg-blue-500"
                          : candidate.status === "Interview Scheduled"
                            ? "bg-yellow-500"
                            : candidate.status === "Selected"
                              ? "bg-green-500"
                              : candidate.status === "Rejected"
                                ? "bg-red-500"
                                : "bg-gray-500"
                    }`}
                  >
                    {candidate.status}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Applied on:</span>
                  <span>{formatDate(candidate.createdAt)}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Last Updated:</span>
                  <span>{formatDate(candidate.updatedAt)}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Job Information</h2>
              {candidate.jobId && typeof candidate.jobId === "object" ? (
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="flex">
                    <span className="font-medium w-32">Job Title:</span>
                    <span>{candidate.jobId.title}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Job Type:</span>
                    <span>{candidate.jobId.type}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Location:</span>
                    <span>{candidate.jobId.location}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Work Hours:</span>
                    <span>{candidate.jobId.workHours}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32">Posted At:</span>
                    <span>{formatDate(candidate.jobId.postedAt)}</span>
                  </div>
                  <Link
                    href={`/admin/dashboard/job/${candidate.jobId._id}`}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-center mt-2"
                  >
                    View Job Details
                  </Link>
                </div>
              ) : (
                <p className="text-gray-500">No job information available</p>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Update Status</h2>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleStatusChange("Not Viewed")}
                  className={`px-3 py-2 rounded text-white ${
                    candidate.status === "Not Viewed"
                      ? "bg-gray-600"
                      : "bg-gray-500 hover:bg-gray-600"
                  }`}
                >
                  Not Viewed
                </button>
                <button
                  onClick={() => handleStatusChange("Under Review")}
                  className={`px-3 py-2 rounded text-white ${
                    candidate.status === "Under Review"
                      ? "bg-blue-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  Under Review
                </button>
                <button
                  onClick={() => handleStatusChange("Interview Scheduled")}
                  className={`px-3 py-2 rounded text-white ${
                    candidate.status === "Interview Scheduled"
                      ? "bg-yellow-600"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
                >
                  Interview Scheduled
                </button>
                <button
                  onClick={() => handleStatusChange("Selected")}
                  className={`px-3 py-2 rounded text-white ${
                    candidate.status === "Selected"
                      ? "bg-green-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  Selected
                </button>
                <button
                  onClick={() => handleStatusChange("Rejected")}
                  className={`px-3 py-2 rounded text-white ${
                    candidate.status === "Rejected" ? "bg-red-600" : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  Rejected
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Actions</h2>
              <div className="grid grid-cols-2 gap-2">
                {candidate.resume && (
                  <a
                    href={candidate.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-600 text-center"
                  >
                    View Resume
                  </a>
                )}
                <button
                  onClick={() => (window.location.href = `mailto:${candidate.email}`)}
                  className="bg-teal-500 text-white px-3 py-2 rounded hover:bg-teal-600"
                >
                  Contact Candidate (mail)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
