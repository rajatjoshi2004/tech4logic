const styles = {
  container: {
    paddingLeft: { xs: "10px", md: "100px" },
    paddingRight: { xs: "10px", md: "100px" },
    // backgroundColor: "#020727",
    marginBottom: "30px",
  },
  iconContainer: {
    display: "flex",
    gap: { xs: "50px", md: "140px" },
    alignItems: "center",
    fontSize: "20px",
    "& body2": {
      fontSize: { xs: "12px", md: "20px" },
    },
  },
  IconButtonConatiner: {
    borderRadius: "50%",
    border: "1px solid #fff",
    right: { xs: "12px", md: "30px" },
    background: "#fff",
    color: "#000",
    "&:hover": {
      background: "#fff",
    },
  },
  SubContainer: {
    color: "#fff",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: { xs: "20px", md: "130px" },
    "& h6": {
      fontSize: { xs: "22px", md: "30px" },
      fontWeight: "bold",
    },
  },
  logoContainer: {
    textAlign: "left",
    "& img": {
      width: "100%",
      height: "auto",
      marginBottom: "10px",
    },
    "& h6": {
      fontSize: { xs: "22px", md: "30px" },
      fontWeight: "600",
      mb: { xs: "0px", md: "3px" },
      mt: { xs: "0px", md: 4 },
      textWrap: "nowrap",
    },
    "& body2": {
      fontSize: { xs: "14px", md: "16px" },
      fontWeight: "400",
      mb: { xs: "15px", md: 2 },
      mt: { xs: "2px", md: 4 },
      color: "gray",
    },
    "& img": {
      width: { xs: "250px", md: "320px" },
      height: { xs: "100px", md: "150px" },
    },
  },
  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1,
    mt: 4,
    flexWrap: "nowrap",
    "& svg": {
      width: { xs: "40px", md: "30px" },
      height: { xs: "40px", md: "30px" },
      marginRight: { xs: "8px", md: "10px" },
    },
  },
  textField: {
    flexGrow: 1,
    marginRight: 1,
    background: "#000A49",
    borderRadius: "10px",
    height: "50px",
    width: { xs: "100%", sm: "auto" },
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      color: "#ABA9A9",
      border: "1px solid #fff",
      height: "100%",
    },
    "& input": {
      padding: "0 20px",
    },
  },
  sendButton: {
    color: "#fff",
    width: "auto",
    fontSize: { xs: "16px", sm: "18px" },
    height: "50px",
    background: "#3E57A7",
    "&:hover": {
      backgroundColor: "#86CDB6",
    },
  },
  serviceContainer: {
    fontSize: { xs: "16px", sm: "20px" },
    fontWeight: "700",
    lineHeight: "28px",
    color: "#fff",
    mb: 3,
  },
  ulContainer: {
    "& ul": {
      listStyleType: "none",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
  },
  serviceItem: {
    fontSize: { xs: "14px", sm: "16px" },
    fontWeight: "400",
    lineHeight: "28px",
    color: "#A7A7A7",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  },
  locationHeader: {
    fontSize: { xs: "16px", sm: "20px" },
    fontWeight: "700",
    lineHeight: "28px",
    color: "#fff",
    mb: 3,
  },
  locationCity: {
    color: "#fff",
    fontSize: { xs: "14px", sm: "16px" },
    fontWeight: "600",
    lineHeight: "28px",
    marginBottom: "2px",
    textWrap: "balance",
  },
  locationAddress: {
    fontSize: { xs: "14px", sm: "16px" },
    fontWeight: "400",
    lineHeight: "28px",
    color: "#A7A7A7",
    marginBottom: "2px",
    textWrap: "balance",
  },
};

export default styles;
