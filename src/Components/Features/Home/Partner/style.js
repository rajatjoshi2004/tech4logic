const styles = {
  ContainerCSS: {
    width: { xs: "calc(100% - 20px)", sm: "calc(100% - 60px)", md: "calc(100% - 120px)" },
    marginX: "auto",
    // paddingY: "10px",
    backgroundColor: "#1e1c30",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
