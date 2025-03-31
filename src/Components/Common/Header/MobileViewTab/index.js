"use client";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MdOutlineArrowOutward,
  MdClose,
  MdHome,
  MdInfo,
  MdWork,
  MdContactMail,
  MdArticle,
} from "react-icons/md";
import styles from "./style";

export const MobileViewTab = ({ drawerOpen, toggleDrawer }) => {
  const router = useRouter();

  const menuItems = [
    { label: "Home", path: "/", isPopup: false, icon: <MdHome /> },
    { label: "About Us", path: "about", isPopup: false, icon: <MdInfo /> },
    { label: "Services", path: "#", isPopup: true, icon: <MdWork /> },
    { label: "Careers", path: "careers", isPopup: false, icon: <MdWork /> },
    { label: "Blogs", path: "blog", isPopup: false, icon: <MdArticle /> },
    { label: "Contact", path: "contact", isPopup: false, icon: <MdContactMail /> },
  ];

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      transitionDuration={500}
      sx={styles.containerCSS}
    >
      <Box
        sx={{ padding: "20px", position: "relative" }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <IconButton sx={styles.iconContainerCSS} onClick={toggleDrawer(false)}>
          <MdClose size={24} />
        </IconButton>

        <ListItemButton onClick={() => router.push(`/`)} sx={styles.ListItemButtonCSS}>
          <Image
            src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Home/tech4logic.svg"
            width={170}
            height={60}
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/`)}
          />
        </ListItemButton>

        <Divider sx={styles.dividerCSS} />

        {menuItems.map((item) => (
          <ListItemButton
            key={item.label}
            onClick={() => router.push(item.path)}
            sx={styles.menuItemsCSS}
          >
            <Box sx={{ marginRight: "10px", color: "#fff" }}>{item.icon}</Box>

            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: { fontSize: "18px", fontWeight: 500, color: "#fff" },
              }}
            />
          </ListItemButton>
        ))}

        <Box sx={styles.buttonContainer}>
          <Button variant="contained" onClick={() => router.push("/contact")}>
            Let's Talk
            <MdOutlineArrowOutward style={{ marginLeft: "8px" }} />
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
