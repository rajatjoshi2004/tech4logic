const styles = {
  headerContainer: {
    borderBottom: "1px solid rgba(58, 56, 79, 1)",
    backgroundColor: "rgba(30, 28, 48, 0.8)",
    paddingX: { xs: 0, md: "30px" },
    width: { xs: "100%", md: "calc(100% - 60px)" },
    left: { xs: 0, md: "30px" },
    right: { xs: 0, md: "30px" },
    borderRadius: "10px",
    zIndex: 1200,
    boxSizing: "border-box",
    color: "#fff",
    marginTop: "20px",
    height: "85px",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
  },

  letsTalkBtn: {
    display: { xs: "none", sm: "inline-flex" },
    background: "linear-gradient(93.53deg, #3E57A7 11.57%, #86CDB6 99.84%)",
    "&:hover": {
      backgroundColor: "rgba(110, 180, 158, 1)",
    },
  },

  tabContainer: {
    display: { xs: "none", sm: "flex" },
    flexWrap: "wrap",
    gap: { xs: "10px", sm: "30px", md: "40px", lg: "48px" },
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
    textWrap: "nowrap",
    "& h1": {
      fontWeight: 500,
      fontSize: { xs: "14px", sm: "16px", md: "18px" },
      color: "#fff",
      cursor: "pointer",
      "&:hover": {
        color: "rgba(134, 205, 182, 1)",
      },
    },
  },

  popoverListCSS: {
    width: 320,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
  },

  tab: {
    fontWeight: "bold",
    fontSize: "16px",
    backgroundColor: "background.contactUsBg",
  },
  subTab: {
    paddingLeft: "20px",
    fontWeight: "bold",
    fontSize: "14px",
    backgroundColor: "background.contactUsBg",
  },
  subSubItem: {
    paddingLeft: "40px",
    fontSize: "12px",
    backgroundColor: "background.contactUsBg",
  },
  toolbarCSS: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logoContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  desktopTabs: {
    display: { xs: "none", sm: "flex" },
    gap: { sm: "30px", md: "40px", lg: "48px" },
  },
  menuItemCSS: {
    color: "#fff",
    position: "relative",
  },
  actionContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  mobileMenuButton: {
    display: { sm: "none" },
  },
};

export default styles;
