"use client";

import { formatCount } from "@/utils/common";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BsChatText } from "react-icons/bs";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { RiShare2Line } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import BlogChat from "../BlogCommit";
import SocialShareComponent from "../ShareComponent";
import { API_BASE_URL } from "@/constant/appConstants";

export const BlogActionBtn = ({ blogData, comments }) => {
  const [shareOpen, setShareOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [guestUser, setGuestUser] = useState(null);
  const [likeCount, setLikeCount] = useState(blogData?.likeCount || 0); 
  const [userLiked, setUserLiked] = useState(blogData?.userLiked || false); 

  useEffect(() => {
    const storedGuestUser = localStorage.getItem("guestUser");
    if (storedGuestUser) {
      setGuestUser(JSON.parse(storedGuestUser));
    }
  }, []);

  const blogLikeUpdated = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/service/blog-like/${blogData?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID: guestUser?.result?._id}), 
      });

      const result = await response.json();
      if (response.ok) {
        setLikeCount(result.data.likeCount);
        setUserLiked(!userLiked); 
      } else {
        console.error(result.message || "Failed to update like count");
      }
    } catch (error) {
      console.error("Error while updating like count:", error);
    }
  };

  const handleBlogLikeCount = () => {
    blogLikeUpdated();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#f8f9fa",
        padding: 2,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        color: "#000",
      }}
    >
      {/* Left Section: User Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Avatar
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          alt="User Name"
          sx={{ width: 50, height: 50 }}
        />
        <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333", textAlign: "center" }}>
          Pankaj Kumar Meena
        </Typography>
      </Box>

      {/* Right Section: Action Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Like */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            "&:hover": { color: userLiked ? "#ff5252" : "#1976d2" },
          }}
          onClick={handleBlogLikeCount}
        >
          <SlLike style={{ fontSize: "24px", color: userLiked ? "#ff5252" : "#000" }} />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {formatCount(likeCount)}
          </Typography>
        </Box>

        {/* Comments */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            "&:hover": { color: "#1976d2" },
          }}
          onClick={() => setChatOpen(true)}
        >
          <BsChatText style={{ fontSize: "24px" }} />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {formatCount(comments?.length)}
          </Typography>
        </Box>

        {/* Share */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            "&:hover": { color: "#1976d2" },
          }}
          onClick={() => setShareOpen(true)}
        >
          <RiShare2Line style={{ fontSize: "24px" }} />
        </Box>

        {/* More Options */}
        <IconButton>
          <MdOutlineMoreHoriz style={{ fontSize: "24px" }} />
        </IconButton>
      </Box>

      {/* Social Share Modal */}
      <SocialShareComponent
        callBackName={"uniqueCommunity"}
        open={shareOpen}
        handleModalClose={() => setShareOpen(false)}
        sharingUrl={blogData?._id}
      />

      {/* Blog Chat Panel */}
      <BlogChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        blogData={blogData}
        comments={comments}
      />
    </Box>
  );
};
