import React from "react";
import { Box, Typography } from "@mui/material";
import ourMissionstyles from "./style";

const OurMissionComponent = ({ outMissionContentData }) => {
  return (
    <Box>
      {outMissionContentData?.map((row) => (
        <Box
          key={row?._id}
          sx={{
            ...ourMissionstyles.container,
            borderBottom:
              row?._id !== outMissionContentData?.length - 1 ? "1px solid #fff" : "none",
          }}
        >
          <Typography variant="h1" sx={ourMissionstyles.container["& h1"]}>
            Our <br />
            {row?.title?.split(" ")[1]}
          </Typography>

          <Typography variant="body1" sx={ourMissionstyles.container["& body1"]}>
            {row?.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default OurMissionComponent;
