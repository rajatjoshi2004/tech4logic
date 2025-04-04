import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 mt-24 text-white">Admin Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/admin/dashboard/job">
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
            Job Applicant
          </button>
        </Link>
        <Link href="/admin/dashboard/career">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Career
          </button>
        </Link>
        <Link href="/admin/dashboard/blog">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            Blog
          </button>
        </Link>
      </div>
    </div>
  );
}
