const styles = {
  container: {
    paddingX: { xs: "20px", md: "110px" },
    paddingTop: "110px",
    color: "#fff",
    mb: 8,
  },
  contactTitle: {
    fontSize: { xs: "40px", md: "64px" },
    mb: 2,
  },
  breadcrumbs: {
    fontSize: "16px",
    mb: 2,
  },
  scheduleMeetingSection: {
    mb: 8,
    mt: { xs: "30px", md: "60px" },
  },
  scheduleTitle: {
    fontSize: { xs: "34px", md: "64px" },
    mb: 1,
  },
  borderBottom: {
    borderBottom: "0.5px solid #fff",
    mb: 1,
  },
  scheduleDescription: {
    fontSize: { xs: "20px", md: "36px" },
    mb: 1,
    color: "#67839D",
  },
  formRow: {
    width: "100%",
    mb: 2,
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "20px", md: "0" },
  },
  formLabel: {
    fontSize: { xs: "16px", md: "24px" },
    mb: 1,
    display: "flex",
    alignItems: "center",
  },
  inputField: {
    color: "#fff",
    ml: { xs: "0", md: 1 },
    outline: "none",
    fontSize: { xs: "16px", md: "22px" },
    flex: 1,
    "&::placeholder": {
      color: "rgba(53, 73, 96, 1)",
    },
  },
  divider: {
    mb: "10px",
    mt: "10px",
  },
  termsSection: {
    mb: 2,
  },
  checkbox: {
    color: "#D9D9D9",
    "&.Mui-checked": {
      color: "#fff",
    },
  },
  termsText: {
    fontSize: { xs: "16px", md: "18px" },
    color: "#fff",
  },
  submitButton: {
    background: "linear-gradient(90deg, #86CDB6 0%, #3E57A7 100%)",
    color: "#fff",
    height: "50px",
    "&:hover": {
      background: "linear-gradient(90deg, #86CDB6 0%, #3E57A7 100%)",
    },
  },
  inputFieldCSS: {
    border: "none",
    borderBottom: "1px solid rgba(97, 153, 205, 1)",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: { xs: "16px", md: "22px" },
    outline: "none",
  },
};

export default styles;
