import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./style";
import { API_BASE_URL } from "@/constant/appConstants";

const BlogChat = ({ isOpen, onClose, blogData, comments }) => {
  const [messages, setMessages] = useState(comments || []);
  const [newMessage, setNewMessage] = useState("");
  const [guestUser, setGuestUser] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);

  useEffect(() => {
    const storedGuestUser = localStorage.getItem("guestUser");
    if (storedGuestUser) {
      setGuestUser(JSON.parse(storedGuestUser));
    }
  }, []);

  const handleSend = async () => {
    if (newMessage.trim() && guestUser) {
      const newComment = {
        id: messages.length + 1,
        username: guestUser?.result?.userName,
        profilePic: guestUser?.result?.profilePic,
        commentText: newMessage.trim(),
      };

      setMessages([...messages, newComment]);
      setNewMessage("");

      const commentData = {
        blogId: blogData?._id,
        username: guestUser?.result?.userName,
        profilePic: guestUser?.result?.profilePic,
        commentText: newMessage.trim(),
        userId: guestUser?.result?._id,
      };

      try {
        const response = await fetch(`${API_BASE_URL}/v1/service/create-blog-comment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        });

        const result = await response.json();
        if (response.ok) {
          console.log("Comment posted successfully:", result);
        } else {
          console.error("Error posting comment:", result);
        }
      } catch (error) {
        console.error("Error sending request:", error);
      }
    }
  };

  const handleDeleteComment = async (commentId) => {
    setCommentToDelete(commentId);
    setOpenDeleteDialog(true);
  };

  const confirmDelete = async () => {
   
    if (guestUser && commentToDelete) {
      const commentToDeleteObj = messages.find((msg) => msg._id === commentToDelete);
      if (commentToDeleteObj && commentToDeleteObj.userId === guestUser?.result?.userId) {
        setMessages(messages.filter((msg) => msg._id !== commentToDelete));
        try {
          const response = await fetch(
            `${API_BASE_URL}/v1/service/delete-blog-comment/${commentToDelete}`,
            {
              method: "DELETE",
            },
          );

          const result = await response.json();
          if (response.ok) {
            console.log("Comment deleted successfully:", result);
          } else {
            console.error("Error deleting comment:", result);
          }
        } catch (error) {
          console.error("Error sending request:", error);
        }
      } else {
        console.log("You can only delete your own comments.");
      }
    }
    setOpenDeleteDialog(false);
    setCommentToDelete(null);
  };

  const cancelDelete = () => {
    setOpenDeleteDialog(false);
    setCommentToDelete(null);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: isOpen ? 0 : "-100%",
        height: "100%",
        width: "400px",
        backgroundColor: "linear-gradient(135deg, #ffffff, #f9f9f9)",
        boxShadow: "-4px 0 10px rgba(0, 0, 0, 0.15)",
        transition: "right 0.3s ease-in-out",
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        borderLeft: "1px solid #ddd",
        ...(isOpen ? {} : { inert: true }),
      }}
    >
      {/* Chat Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          backgroundColor: "#1976d2",
          color: "#fff",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Chat Support
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "#fff" }}>
          <IoClose size={24} />
        </IconButton>
      </Box>

      <Box sx={styles.commentChatBox}>
        <Box sx={styles.profileComment}>
          <img src={guestUser?.result?.profilePic} style={{ width: "50px" }} alt="user Profile" />
          <Typography variant="h3">{guestUser?.result?.userName}</Typography>
        </Box>
        <textarea
          id="autoHeightTextarea"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ height: "65px" }}
          placeholder="What are your thoughts?"
        />
        <Box sx={styles.bottomSection}>
          <Box sx={styles.rightBottom}>
            <Button onClick={() => onClose()}>Cancel</Button>
            <Button sx={styles.respond} onClick={handleSend}>
              Respond
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Messages List */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: "16px 24px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages?.map((msg) => (
          <Box
            key={msg._id}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              mb: 3,
              p: 2,
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <Avatar
              src={msg.profilePic}
              alt={msg.username}
              sx={{ width: 48, height: 48, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#333" }}>
                {msg.username}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  mt: 0.5,
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {msg.commentText}
              </Typography>
            </Box>

            {/* Show delete icon only if it's the user's comment */}
            {msg.userId === guestUser?.result?._id && (
              <IconButton onClick={() => handleDeleteComment(msg._id)} sx={{ color: "#d32f2f" }}>
                <RiDeleteBin6Line size={24} />
              </IconButton>
            )}
          </Box>
        ))}
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={cancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this comment? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BlogChat;
