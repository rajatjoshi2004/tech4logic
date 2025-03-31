"use client";

import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useCallback, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styles from "./style";

const MdOutlineArrowOutward = dynamic(() =>
  import("react-icons/md").then((mod) => mod.MdOutlineArrowOutward)
);

const Banner = ({ bannerData }) => {
  const router = useRouter();

  const handleKnowMore = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleGetInTouch = useCallback(() => {
    router.push("/");
  }, [router]);

  const banner = useMemo(() => bannerData?.[0], [bannerData]);

  return (
    <Box sx={styles.container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={banner?.posterImageUrl}
        loading="lazy"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={banner?.bannerImageUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box sx={styles.contentContainer}>
        <Typography variant="h6" sx={styles.contentContainer["& h6"]}>
          {banner?.title}
        </Typography>

        <Typography variant="h1" sx={styles.contentContainer["& h1"]}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{banner?.subTitle}</ReactMarkdown>
        </Typography>

        <Typography variant="body1" sx={styles.contentContainer["& body1"]}>
          {banner?.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "20px", md: "40px" },
            flexWrap: "wrap",
          }}
        >
          <Button onClick={handleKnowMore} sx={styles.knowbtnCSS}>
            Know More <MdOutlineArrowOutward />
          </Button>

          <Button onClick={handleGetInTouch} sx={styles.getTouchBtnCSS}>
            Get In Touch
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
