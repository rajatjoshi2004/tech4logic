import { memo } from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import { FooterComponent } from "../../footer";
import styles from "./style";

const DefaultLayout = ({ children, hideHeader, withSideBar, customStyles = {}, ...rest }) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles.wrapper }}>
      {!hideHeader && <Header />}
      <Box
        sx={{
          minHeight: "100vh",
          mb: 4,
          background: "#0B081E",
        }}
      >
        {children}
      </Box>
      <FooterComponent {...rest} />
    </Box>
  );
};

export default memo(DefaultLayout);
