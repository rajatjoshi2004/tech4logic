"use client";

import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const MapSection = ({ LocationsData }) => {
  const [selectedLocation, setSelectedLocation] = useState("Gurgaon");

  const handleButtonClick = (location) => {
    setSelectedLocation(location);

  };


  return (
    <Box sx={{ width: "100%", mt: 14, mb: 14, color: "#fff" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 0 }}>
        {Object.keys(LocationsData).map((location) => (
          <Button
            key={location}
            onClick={() => handleButtonClick(location)}
            variant="outlined"
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              textTransform: "none",
              width: { xs: "auto", md: "250px" },
              color: selectedLocation === location ? "#000" : "#fff",
              borderColor: "#86CDB6",
              background:
                selectedLocation === location
                  ? "linear-gradient(90deg, #86CDB6 0%, #3E57A7 100%)"
                  : "transparent",
              borderRadius: "10px",
              margin: "0 10px",
              borderBottomRightRadius: "1px",
              borderBottomLeftRadius: "1px",
              "&:hover": {
                background:
                  selectedLocation === location
                    ? "linear-gradient(90deg, #86CDB6 0%, #3E57A7 100%)"
                    : "rgba(134, 205, 182, 0.2)",
              },
            }}
          >
            {location}
          </Button>
        ))}
      </Box>

      <Box sx={{ width: "100%", height: { xs: "300px", md: "450px" }, mt: 0 }}>
        <iframe
          src={LocationsData[selectedLocation].mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${selectedLocation} Map`}
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapSection;
