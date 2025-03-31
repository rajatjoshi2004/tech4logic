const styles = {
    container: {
      color: "#ccc",
      fontSize: "14px",
      lineHeight: "1.6",
      padding: "10px",
      color: "#fff",
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
        padding: "10px", 
        margin: "0", 
        listStyleType: "disc", 
      },
      "& li": {
        margin: "5px 0",
        paddingLeft: "20px", 
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
    listItem: {
      marginBottom: "8px",
    },
    listItemIcon: {
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#3498db",
    },
    paragraph: {
      marginBottom: "16px",
    },
    link: {
      color: "green",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };
  
  export default styles;
  