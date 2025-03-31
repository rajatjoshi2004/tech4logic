"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/constant/appConstants";

const BlogCard = ({ image, title, description, _id }) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "718px",
        height: "600px",
        marginBottom: 2,
        background: "linear-gradient(90deg, #291F65 0%, #004844 100%)",
        border: "1px solid #004844",
        borderRadius: "20px",
        color: "#ffffff",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "300px",
          width: "100%",
          objectFit: "cover",
        }}
        image={image}
        alt={title}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div" sx={{ color: "#ffffff" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph sx={{ color: "#b0bec5" }}>
          <ReactMarkdown
            remarkPlugins={[RemarkMathPlugin, remarkGfm]}
            rehypePlugins={[rehypeKatex, remark2rehype]}
            components={{
              img: ({ node, ...props }) => null,
            }}
          >
            {description.split(" ").slice(0, 65).join(" ")}
          </ReactMarkdown>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "transparent",
              color: "#ffffff",
              borderColor: "#ffffff",
              borderRadius: "20px",
              padding: "8px 16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#291F65",
                borderColor: "#291F65",
              },
            }}
            onClick={() => router.push(`/${_id}`)}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const BlogListing = () => {
  const [showAll, setShowAll] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);

  const fetchBlogList = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/service/get-blog-list`);
      const result = await response.json();
      const data = result.data;
      setBlogList(data);
      setDisplayedBlogs(data.slice(0, 4));
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
    setDisplayedBlogs(blogList);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 15 }, py: 4 }}>
      <Grid container spacing={4}>
        {displayedBlogs?.map((blog) => (
          <Grid item xs={12} sm={6} key={blog?._id}>
            <BlogCard {...blog} />
          </Grid>
        ))}
      </Grid>
      {!showAll && blogList?.length > 4 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "transparent",
              color: "#ffffff",
              borderColor: "#ffffff",
              borderRadius: "20px",
              padding: "8px 16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#291F65",
                borderColor: "#291F65",
              },
            }}
            onClick={handleShowMore}
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BlogListing;
