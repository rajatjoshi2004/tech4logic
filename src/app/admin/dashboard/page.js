"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { MdWork, MdPeople, MdArticle, MdDashboard, MdExitToApp } from "react-icons/md";

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    newApplications: 0,
    activeJobs: 0,
    publishedBlogs: 0
  });
  const [loading, setLoading] = useState({
    applications: true,
    jobs: true,
    blogs: true
  });
  const [error, setError] = useState({
    applications: null,
    jobs: null,
    blogs: null
  });

  useEffect(() => {
    // Check for token on component mount
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin");
    } else {
      fetchStats(token);
    }
  }, [router]);

  const fetchStats = async (token) => {
    try {
      // Fetch new applications (candidates with status "Not Viewed")
      const candidatesRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/career/candidate-list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const candidatesData = await candidatesRes.json();
      if (!candidatesData.success) throw new Error("Failed to fetch candidates");
      
      const newApplications = candidatesData.data.filter(
        (candidate) => candidate.status === "Not Viewed"
      ).length;

      // Fetch active jobs
      const jobsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/jobs/job-list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const jobsData = await jobsRes.json();
      if (!jobsData.success) throw new Error("Failed to fetch jobs");

      // Fetch published blogs
      const blogsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/blogs/blog-list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const blogsData = await blogsRes.json();
      if (!blogsData.success) throw new Error("Failed to fetch blogs");

      setStats({
        newApplications,
        activeJobs: jobsData.data.length,
        publishedBlogs: blogsData.data.length
      });
    } catch (err) {
      setError({
        applications: err.message,
        jobs: err.message,
        blogs: err.message
      });
    } finally {
      setLoading({
        applications: false,
        jobs: false,
        blogs: false
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    router.push("/admin");
  };

  return (
    <div className="min-h-screen p-4 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 mt-24">
        <Typography variant="h4" component="h1" className=" text-white font-bold">
          <MdDashboard className="inline mr-2" />
          Admin Dashboard
        </Typography>
        <Button
          variant="outlined"
          color="error"
          startIcon={<MdExitToApp />}
          onClick={handleLogout}
          className="hover:bg-red-50"
        >
          Logout
        </Button>
      </div>

      {/* Dashboard Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Link href="/admin/dashboard/job" passHref>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="text-center">
                <MdWork className="text-4xl mx-auto text-purple-500 mb-3" />
                <Typography variant="h5" component="h2" className="mb-2">
                  Job Applicants
                </Typography>
                <Typography color="textSecondary">
                  Manage job applications and candidates
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Link href="/admin/dashboard/career" passHref>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="text-center">
                <MdPeople className="text-4xl mx-auto text-blue-500 mb-3" />
                <Typography variant="h5" component="h2" className="mb-2">
                  Career Portal
                </Typography>
                <Typography color="textSecondary">
                  Manage career opportunities and listings
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Link href="/admin/dashboard/blog" passHref>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="text-center">
                <MdArticle className="text-4xl mx-auto text-green-500 mb-3" />
                <Typography variant="h5" component="h2" className="mb-2">
                  Blog Management
                </Typography>
                <Typography color="textSecondary">Create and manage blog content</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>

      {/* Quick Stats Section */}
      <div className="mt-12">
        <div className="mb-4">
          <Typography variant="h5" component="h2" className="mb-4 text-white">
            Quick Stats
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card className="bg-purple-50">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  New Applications
                </Typography>
                {loading.applications ? (
                  <Typography variant="h6" component="p" className="text-purple-600">
                    Loading...
                  </Typography>
                ) : error.applications ? (
                  <Typography variant="h6" component="p" className="text-red-500">
                    Error: {error.applications}
                  </Typography>
                ) : (
                  <Typography variant="h4" component="p" className="text-purple-600">
                    {stats.newApplications}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="bg-blue-50">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Active Job Listings
                </Typography>
                {loading.jobs ? (
                  <Typography variant="h6" component="p" className="text-blue-600">
                    Loading...
                  </Typography>
                ) : error.jobs ? (
                  <Typography variant="h6" component="p" className="text-red-500">
                    Error: {error.jobs}
                  </Typography>
                ) : (
                  <Typography variant="h4" component="p" className="text-blue-600">
                    {stats.activeJobs}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="bg-green-50">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Published Blogs
                </Typography>
                {loading.blogs ? (
                  <Typography variant="h6" component="p" className="text-green-600">
                    Loading...
                  </Typography>
                ) : error.blogs ? (
                  <Typography variant="h6" component="p" className="text-red-500">
                    Error: {error.blogs}
                  </Typography>
                ) : (
                  <Typography variant="h4" component="p" className="text-green-600">
                    {stats.publishedBlogs}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}