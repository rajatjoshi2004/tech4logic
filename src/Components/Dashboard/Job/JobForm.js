"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

export default function JobForm() {
  const router = useRouter();
  useEffect(() => {
    // Check for token on component mount
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin");
    }
  }, [router]);
  const { jobId } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [details, setDetails] = useState([]);
  const [currentDetail, setCurrentDetail] = useState("");
  const isEditMode = Boolean(jobId);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      experience: "",
      description: "",
      location: "",
      workHours: "",
      type: "",
      details: [],
    },
  });

  // Fetch job details if in edit mode
  useEffect(() => {
    if (!jobId) return;

    const fetchJobDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authentication required");
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/jobs/job-details/${jobId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || "Failed to fetch job details");
        }

        // Set form values
        setValue("title", data.data.title);
        setValue("experience", data.data.experience);
        setValue("description", data.data.description);
        setValue("location", data.data.location);
        setValue("workHours", data.data.workHours);
        setValue("type", data.data.type);

        if (data.data.details && data.data.details.length > 0) {
          setDetails(data.data.details);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchJobDetails();
  }, [jobId, setValue]);

  const addDetail = () => {
    if (currentDetail.trim() !== "") {
      setDetails([...details, currentDetail.trim()]);
      setCurrentDetail("");
    }
  };

  const removeDetail = (detailToRemove) => {
    setDetails(details.filter((detail) => detail !== detailToRemove));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication required");
      }

      const jobData = {
        title: data.title,
        experience: data.experience,
        description: data.description,
        location: data.location,
        workHours: data.workHours,
        type: data.type,
        details: details,
      };

      const url = isEditMode
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/jobs/update-job/${jobId}`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/jobs/create-job`;

      const method = isEditMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Failed to ${isEditMode ? "update" : "create"} job`);
      }

      setSuccess(true);
      reset();
      setDetails([]);

      // Redirect after 1 second
      setTimeout(() => {
        router.push("/admin/dashboard/job");
      }, 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4 mt-24">
        <h1 className="text-2xl font-bold text-white">
          {isEditMode ? "Edit Job Posting" : "Create New Job Posting"}
        </h1>
        <Link
          href="/admin/dashboard/jobs"
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Back to Jobs
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Job {isEditMode ? "updated" : "created"} successfully! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Job Title *
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: "Job title is required" })}
              className={`w-full px-3 py-2 border rounded-md ${errors.title ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
              Job Type *
            </label>
            <select
              id="type"
              {...register("type", { required: "Job type is required" })}
              className={`w-full px-3 py-2 border rounded-md ${errors.type ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
            {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location *
            </label>
            <input
              type="text"
              id="location"
              {...register("location", { required: "Location is required" })}
              className={`w-full px-3 py-2 border rounded-md ${errors.location ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="workHours" className="block text-sm font-medium text-gray-700 mb-1">
              Work Hours *
            </label>
            <input
              type="text"
              id="workHours"
              {...register("workHours", { required: "Work hours are required" })}
              className={`w-full px-3 py-2 border rounded-md ${errors.workHours ? "border-red-500" : "border-gray-300"}`}
              placeholder="e.g. 9 AM - 5 PM"
            />
            {errors.workHours && (
              <p className="mt-1 text-sm text-red-600">{errors.workHours.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Experience Required *
          </label>
          <input
            type="text"
            id="experience"
            {...register("experience", { required: "Experience is required" })}
            className={`w-full px-3 py-2 border rounded-md ${errors.experience ? "border-red-500" : "border-gray-300"}`}
            placeholder="e.g. 3-5 years"
          />
          {errors.experience && (
            <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Job Description *
          </label>
          <textarea
            id="description"
            rows={6}
            {...register("description", { required: "Description is required" })}
            className={`w-full px-3 py-2 border rounded-md ${errors.description ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
            Job Details (Responsibilities, Requirements, etc.)
          </label>
          <div className="flex">
            <input
              type="text"
              id="details"
              value={currentDetail}
              onChange={(e) => setCurrentDetail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addDetail();
                }
              }}
              placeholder="Add detail and press Enter"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md"
            />
            <button
              type="button"
              onClick={addDetail}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {details.map((detail, index) => (
              <span
                key={index}
                className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
              >
                {detail}
                <button
                  type="button"
                  onClick={() => removeDetail(detail)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded-md text-white ${isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {isSubmitting
              ? isEditMode
                ? "Updating..."
                : "Creating..."
              : isEditMode
                ? "Update Job"
                : "Create Job"}
          </button>
        </div>
      </form>
    </div>
  );
}
