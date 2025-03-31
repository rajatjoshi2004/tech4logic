"use client";

import { API_BASE_URL } from "@/constant/appConstants";
import {
  Box,
  Button,
  Collapse,
  Divider,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import styles from "./style";

export const OurOpeningsComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [openingsList, setOpeningsList] = useState([]);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleShowMore = () => {
    setVisibleCount(openingsList?.length);
  };

  // Fetch Job list content based on
  const getAllJobListDetails = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/service/get-job-list`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { data } = await response.json();
      setOpeningsList(data);
      console.log("data Job data print", data);
    } catch (err) {
      console.log("Error fetching blog content: ", err);
    }
  };

  useEffect(() => {
    getAllJobListDetails();
  }, []);

  console.log("openingsList", openingsList);

  return (
    <Box sx={{ padding: "20px", maxWidth: "950px", margin: "0 auto" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: "60px", color: "#fff" }}>
        Our Openings
      </Typography>

      <Divider sx={{ backgroundColor: "gray", height: "1px", mb: 2 }} />

      {openingsList?.slice(0, visibleCount).map((opening) => (
        <Box key={opening?._id} sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "30px",
                cursor: "pointer",
              }}
              onClick={() => handleToggle(opening?._id)}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#86CDB6" }}>
                {opening?.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {opening.experience}
              </Typography>
            </Box>

            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                paddingX: "16px",
                display: "flex",
                alignItems: "center",
                background: "#3E57A7",
                color: "#fff",
                borderColor: "gray",
                "&:hover": {
                  borderColor: "gray",
                  backgroundColor: "lightgray",
                },
              }}
            >
              Apply Now
              <MdArrowForward style={{ marginLeft: 8 }} />
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: "10px", mt: 1 }}>
            {[...(opening?.details || []), opening?.location, opening?.type, opening?.workHours]
              .filter(Boolean)
              .map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "4px 8px",
                    fontSize: "14px",
                    color: "gray",
                    transition: "all 0.3s",
                    "&:hover": {
                      color: "black",
                      backgroundColor: "#f0f0f0",
                      borderColor: "#ccc",
                    },
                  }}
                >
                  {item}
                </Box>
              ))}
          </Box>

          {/* Collapsible Job Description */}
          <Collapse in={expandedIndex === opening?._id}>
            <Box sx={styles.container}>
              <ReactMarkdown
                remarkPlugins={[RemarkMathPlugin, remarkGfm]}
                rehypePlugins={[rehypeKatex, remark2rehype]}
                components={{
                  li: ({ node, ...props }) => (
                    <li style={{ ...styles.listItem, listStyleType: "none" }} {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p style={{ ...styles.paragraph, marginBottom: "16px" }} {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      style={{ ...styles.link, textDecoration: "underline" }}
                      {...props}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              >
                {opening?.description}
              </ReactMarkdown>
            </Box>
          </Collapse>

          {/* Divider between job openingsList */}
          {opening?._id < openingsList?.length - 1 && (
            <Divider sx={{ backgroundColor: "gray", height: "1px", my: 2 }} />
          )}
        </Box>
      ))}

      {/* Show More Button */}
      {visibleCount < openingsList?.length && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleShowMore}
            sx={{
              borderRadius: "20px",
              paddingX: "24px",
              background: "#86CDB6",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#70a98c",
              },
            }}
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default OurOpeningsComponent;
