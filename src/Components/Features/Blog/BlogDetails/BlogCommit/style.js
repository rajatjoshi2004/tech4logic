const styles = {
  commentChatBox: {
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 8px",
    padding: "15px",
    "& textarea": {
      width: "100%",
      border: "none",
      color: "#000",
      overflow: "hidden",
      marginTop: "15px",
      backgroundColor: "#fff",
      "&:focus": {
        outline: "none",
      },
    },
  },
  profileComment: {
    display: "flex",
    alignItems: "center",
    "& img": {
      borderRadius: "100px",
    },
    "& h3": {
      fontSize: "18px",
      marginLeft: "20px",
      fontWeight: "600",
      color: "#000"
    },
  },
  bottomSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  rightBottom: {
    "& button": {
      color: "#7c7c7c",
      fontSize: "12px",
    },
  },
  respond: {
    background: "rgb(26, 137, 23)",
    borderRadius: "100px",
    color: "#fff !important",
    padding: "5px 15px",
  },
};

export default styles;
