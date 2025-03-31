"use client";

import React, { useState, useRef } from "react";
import Carousel from 'react-material-ui-carousel'
import { Box, Typography, Button, Paper} from "@mui/material";
import { MdPlayArrow, MdPause } from "react-icons/md";
import Image from "next/image";
import styles from "./style"; 

const OurClient = ({ serviceData }) => {
	const videoRef = useRef(null);
	return (
		<Box sx={styles.containerCSS}>
		 <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 8,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            ...styles.containerCSS["& h4"],
          }}
        >
			Our Clientele 
			</Typography>
			<Typography
          variant="body1"
          sx={{
            ...styles.containerCSS["& body1"],
            mt: { xs: 4, md: 0 },
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
			  <hr></hr>
			</Typography>
		</Box>
		 <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 8,
          textAlign: { xs: "center", md: "left" },
        }}
      >
		<marquee behavior="alternate">
		{serviceData?.map((card) => ( 
			<Image src={card?.logo} width={150} style={{ float: "left", marginLeft: '50px' }} />
		))}
		</marquee>
		</Box>
		</Box>
	);
};

export default OurClient;
