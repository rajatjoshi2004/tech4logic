const style = {
  commentBg: {
    height: "100%",
    position: "relative",
    "& img": {
      width: "100%",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      background: "rgb(6 5 5 / 54%)",
      width: "100%",
      height: "100%",
      left: "0",
      right: "0",
      top: "0",
    },
  },

  imageContainer: {
    width: "100%",
    height: "500px",
    "@media(max-width:480px)": {
      height: "300px",
    },
  },
  bannerBg: {
    background: "#fff",
    position: "absolute",
    bottom: "29px",
    width: "230px",
    zIndex: "9",
    padding: "10px",
    borderRadius: "10px 10px 0px 0px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    cursor: "pointer",
  },
  profileName: {
    display: "flex",
    gap: "15px",
    "& p": {
      fontSize: "14px",
      // color: "#fff",
      color: "#183B56",
      marginLeft: "10px",
    },
  },
  profileName: {
    "& span": {
      backgroundColor: "#ebf7f2",
      width: "16px",
      height: "16px",
      borderRadius: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "10px",
      "& svg": {
        fontSize: "12px",
        color: "#36b37e",
      },
    },
    "& h5": {
      fontSize: "15px",
      fontWeight: "700 !important",
      color: "#183B56",
    },
  },
  profileImg: {
    "& img": {
      width: "40px",
      height: "40px",
      borderRadius: "100px",
    },
  },
  dFlex: {
    display: "flex",
    alignItems: "center",
    color: "#183B56",
  },
  commentSectionBg: {
    borderRadius: "0px 20px 20px 20px",
    border: "1px solid #E5EAF4",
    background: "#FFF",
    boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.03)",
    padding: "30px",
  },
  commentSection: {
    position: "relative",
    top: "-30px",
  },
  bannerDetails: {
    "& h1": {
      color: "#183B56",
      fontSize: "40px",
      textAlign: "center",
      "@media(max-width:480px)": {
        fontSize: "22px",
        textAlign: "left",
      },
    },
  },
  commentDetails: {
    borderTop: "1px solid #d8d8d8",
    borderBottom: "1px solid #d8d8d8",
    padding: "10px",
    marginTop: "30px",
  },
  commentList: {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
  },
  commentChatList: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "& p": {
      marginLeft: "10px",
      color: "#7A7A7A",
      fontSize: "13px",
    },
  },
  commentChat: {
    display: "flex",
    gap: "40px",
  },
  detailsComment: {
    color: "#000",
    "& h2": {
      marginTop: "30px",
      fontSize: "24px",
      fontWeight: "600",
    },
    "& p": {
      marginTop: "30px",
      "@media(max-width:480px)": {
        fontSize: "14px",
        marginTop: "15px",
      },
    },
    "& ul": {
      marginTop: "30px",
    },
    "& pre": {
      marginTop: "30px",
      // color: "#183B56",
      // background: "#11cad4",
      // borderRadius: "10px",
    },
    "& img": {
      marginTop: "30px",
      width: "100%",
      maxWidth:"650px",
      borderRadius: "10px",
      "@media(max-width:480px)": {
        marginTop: "0px",
      },
    },
  },
  contentImg: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    "& img": {
      width: "47%",
    },
  },
  tagList: {
    marginTop: "30px",
    "& h4": {
      fontSize: "18px",
      color: "#585858",
    },
    "& p": {
      color: "#8F8F8F",
      fontSize: "14px",
    },
  },
  buttonTag: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "20px",
    cursor: "pointer",
    "& button": {
      border: "1px solid #585858",
      padding: "6px 20px",
      fontSize: "12px",
      backgroundColor: "transparent",
      color: "#585858",
      "@media(max-width:480px)": {
        padding: "3px 6px",
      },
    },
  },
  messageSection: {
    display: "flex",
    justifyContent: "space-between",
    "& h1": {
      fontSize: "20px",
      textAlign: "left",
    },
    "& svg": {
      cursor: "pointer",
    },
  },
  // commentChatBox

  commentChatBox: {
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 8px",
    padding: "15px",
    marginTop: "30px",
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
      fontSize: "15px",
      marginLeft: "20px",
      fontWeight: "400",
    },
  },
  bottomSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  LeftBottom: {
    display: "flex",
    justifyContent: "space-between",
    "& button": {
      fontSize: "16px",
      fontWeight: "500",
      color: "#7c7c7c",
      // padding: "16px 22px",
      minWidth: "45px",
      height: "30px",
      "& svg": {
        fontSize: "19px",
      },
    },
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
  replySection: {
    display: "flex",
    marginTop: "30px",
    justifyContent: "space-between",
  },
  replyLeftProfile: {
    display: "flex",
    alignItems: "center",
    "& img": {
      borderRadius: "100px",
      width: "40px",
    },
  },
  profileReply: {
    marginLeft: "15px",
    "& h5": {
      fontSize: "16px",
    },
    "& p": {
      fontSize: "13px",
      marginLeft: "0",
    },
  },
  replyRightProfile: {
    "& svg": {
      fontSize: "20px",
      color: "#888888",
    },
  },
  replySectionComment: {
    "& p": {
      fontSize: "15px",
      marginLeft: "0",
      color: "#404040",
      lineHeight: "20px",
      marginTop: "15px",
    },
  },
  replySectionBottomLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    "& p": {
      marginTop: "0 !Important",
      fontSize: "14px",
      fontWeight: "700 !important",
      "& svg": {
        marginRight: "6px",
      },
    },
  },
  replyRight: {
    "& h5": {
      fontSize: "14px",
      color: "#727272",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  replySectionBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "25px",
  },

  videoStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  },
  ImageIConCss: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    cursor: "pointer",
  },
  markdownTable: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    fontSize: "16px",
    textAlign: "left",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    "& th, & td": {
      padding: "10px 15px",
      border: "1px solid #ddd",
    },
    "& th": {
      backgroundColor: "#f7f7f7",
      fontWeight: "bold",
    },
  },
  listItem: {
    marginBottom: "8px",
  },
  paragraph: {
    marginBottom: "16px",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    borderRadius: "8px",
    marginBottom: "16px",
  },
  codeBlock: {
    position: "relative",
    backgroundColor: "#282c34",
    color: "#f8f8f2",
    padding: "12px",
    borderRadius: "8px",
    overflow: "auto",
  },
};

export default style;
