const styles = {
  containerCSS: {
    padding: "60px",
    paddingBottom: 0,
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    color: "#fff",
  },
  ImageConatiner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
    "& body1": {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "1.5",
      position: "relative",
      zIndex: 2,
      top: "-98px",
      left: "-175px",
    },
    "& h1": {
      textWrap: "nowrap",
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "1.5",
      position: "relative",
      zIndex: 2,
      top: "-80px",
      left: "-175px",
    },
  },
  networkingLogo: {
    position: "relative",
    top: "-104px",
    objectFit: "cover",
    zIndex: 1,
  },
  sliderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: "5px", sm: "5px" },
    paddingX: { xs: "5px", sm: "5px" },
    textAlign: "center",
    "& img": {
      objectFit: "contain",
      height: "100px",
      width: "100px",
    },
  },
};

export default styles;
