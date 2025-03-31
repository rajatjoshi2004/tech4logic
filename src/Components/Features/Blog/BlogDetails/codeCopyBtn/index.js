import { Box, IconButton } from "@mui/material";
import React from "react";
import style from "./style";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";



export default function CodeCopyBtn({ children }) {
  const [copyOk, setCopyOk] = React.useState(false);

  const handleClick = () => {
    // Extract text from children
    const text = children ? extractTextFromChildren(children) : "";

    if (text) {
      // Write text to clipboard
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopyOk(true);
          setTimeout(() => {
            setCopyOk(false);
          }, 500);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  // Function to extract text from React children
  const extractTextFromChildren = (children) => {
    if (typeof children === "string") {
      return children;
    }

    if (Array.isArray(children)) {
      return children.map((child) => extractTextFromChildren(child)).join("");
    }

    if (typeof children === "object" && children.props && children.props.children) {
      return extractTextFromChildren(children.props.children);
    }

    return "";
  };

  return (
    // <Box sx={{ position: "absolute", right: "10px", top: "10px" }}>
    <Box sx={style.codeCopybtn}>
      <IconButton onClick={handleClick}>
        {copyOk ? (
          <FaCheck style={{ color: "#fff" }} />
        ) : (
          <FaRegCopy style={{ color: "#fff" }} />
        )}
      </IconButton>
    </Box>
  );
}
