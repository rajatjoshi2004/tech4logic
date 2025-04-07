import { Box, Button, Container } from "@mui/material";
import BlogDetailsPageBanner from "./BlogDetailsPageBanner";
import { MarkDownReactCode } from "./MarkDownCode";
import { BlogActionBtn } from "./action";

const CommentBlog = ({ Blog, comments }) => {
  const tags = Array.isArray(Blog?.tags)
    ? Blog.tags
    : typeof Blog?.tags?.[0] === "string" && Blog.tags[0].startsWith('["')
      ? JSON.parse(Blog.tags[0])
      : Blog?.tags || [];

  return (
    <Box>
      {/* Blog banner */}
      <BlogDetailsPageBanner image={Blog.image} title={Blog.title} />

      {/* Main container */}
      <Box
        sx={{
          minHeight: "100vh",
          color: "#ecf0f1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Blog Action Buttons */}
        <Box
          sx={{
            width: "100%",
            background: "#f8f9fa",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
          maxWidth="md"
        >
          <BlogActionBtn blogData={Blog} comments={comments} />
        </Box>

        {/* Blog Content */}
        <Container
          maxWidth="md"
          sx={{
            background: "#fff",
            padding: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Blog Description */}
          <Box sx={{ marginBottom: 4 }}>
            <MarkDownReactCode description={Blog.description} />
          </Box>

          {/* Tags Section */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {tags?.map((tag, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{
                  fontSize: "0.875rem",
                  padding: "0.4rem 1.2rem",
                  color: "#fff",
                  background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    background: "linear-gradient(45deg, #42a5f5, #1976d2)",
                    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
                  },
                  borderRadius: "10px",
                }}
              >
                {tag}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CommentBlog;
