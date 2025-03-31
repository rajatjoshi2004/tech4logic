"use client";

import CommentBlog from "@/Components/Features/Blog/BlogDetails";
import { API_BASE_URL } from "@/constant/appConstants";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetailsPage = () => {
  const router = useParams();
  const { blogid } = router; 
  const [BlogContent, setBlogContent] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true); 

  // Fetch blog content based on blogid
  const getALLBlogContent = async (blogid) => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/service/get-blog-details/${blogid}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { data } = await response.json();
      setBlogContent(data); 
    } catch (err) {
      console.log("Error fetching blog content: ", err);
    }
  };

  // Fetch comments based on blogid
  const getBlogComments = async (blogid) => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/service/get-comment-list/${blogid}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { data } = await response.json();
      setComments(data);
    } catch (err) {
      console.log("Error fetching comments: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true); 
    getALLBlogContent(blogid);
    getBlogComments(blogid);
  }, [blogid]);

  if (loading) {
    return (
      <Container>
        <Typography variant="h4">Loading...</Typography>
      </Container>
    );
  }

  if (!BlogContent) {
    return (
      <Container>
        <Typography variant="h4">Blog article not found</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ paddingBottom: "40px", background: "#04202e" }}>
      <CommentBlog Blog={BlogContent} comments={comments} />
    </Box>
  );
};

export default BlogDetailsPage;
