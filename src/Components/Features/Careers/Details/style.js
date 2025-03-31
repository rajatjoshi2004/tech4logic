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
  },
  networkingLogo: {
    position: "relative",
    top: "-104px",
    objectFit: "cover",
    zIndex: 1,
  },
  TextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "& body1": {
        fontSize: "24px",
        fontWeight: 400,
        lineHeight: "1.5",
        position: "relative",
        zIndex: 2,
        top: "-90px",
        left: "-110px",
      },
  },
};

export default styles;
