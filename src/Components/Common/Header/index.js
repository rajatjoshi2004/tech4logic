"use client";
import { menuItems, megaMenuData } from "@/utils/common";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import MegaMenuComponent from "./MegaMenuComponent";
import { MobileViewTab } from "./MobileViewTab";
import styles from "./style";
import { API_BASE_URL } from "@/constant/appConstants";

const Header = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [selectedSubTab, setSelectedSubTab] = useState(menuData[0]?.name);
  let timeout = null;

  

  useEffect(() => {
    menuItems.forEach((item) => {
      router.prefetch(`/${item.path}`);
    });
  }, [router]);

  const toggleDrawer = useCallback(
    (open) => (event) => {
      if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
        return;
      }
      setDrawerOpen(open);
    },
    [],
  );

  const handleMenuItemMouseEnter = useCallback((event, item) => {
    if (item.isPopup) {
      clearTimeout(timeout);
      setActiveMenuItem(item.label);
      setMegaMenuOpen(true);
      setAnchorEl(event.currentTarget);
    }
  }, []);

  const handleMenuItemMouseLeave = useCallback(() => {
    timeout = setTimeout(() => {
      setMegaMenuOpen(false);
      setActiveMenuItem(null);
      setAnchorEl(null);
      setSelectedSubTab(menuData[0]?.name);
    }, 200);
  }, []);
  
  const desiredOrder = [
	  "Software Solutions",
    "Cloud Services",
    "Productivity Suite",
    "Network and Security",
    "Networking",
    "Hypervision",
    "Software Licensing",
    "Backup and Recovery",
  ];

  const sortMenuData = (data) => {
    return data.sort((a, b) => {
      return desiredOrder?.indexOf(a?.name) - desiredOrder?.indexOf(b?.name);
    });
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/v1/tech4logic/megamenu`);
        const { data } = await response.json();
		//const { data } = await megaMenuData.data;  // Hemant Sharma
        const rest = sortMenuData(data);
		//const rest = megaMenuData.data;  // Hemant Sharma
		
        setMenuData(data);
        setSelectedSubTab(rest?.[0]?.name);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const getSubItems = () => {
    return menuData.find((subTab) => subTab?.name === selectedSubTab)?.listSubTitle;
  };

  useEffect(() => {
    if (megaMenuOpen) {
      setSelectedSubTab(menuData[0]?.name);
    }
    return () => clearTimeout(timeout);
  }, [megaMenuOpen]);

  // Predefined list of Indian first names and last names
  const indianFirstNames = [
    "Aarav",
    "Vivaan",
    "Aditya",
    "Aryan",
    "Diya",
    "Aadhya",
    "Ananya",
    "Ishaan",
    "Saanvi",
    "Kavya",
  ];
  const indianLastNames = [
    "Sharma",
    "Verma",
    "Patel",
    "Gupta",
    "Mehta",
    "Joshi",
    "Khan",
    "Reddy",
    "Nair",
    "Das",
  ];

  // Function to generate a random Indian name
  const generateIndianName = () => {
    const firstName = indianFirstNames[Math.floor(Math.random() * indianFirstNames.length)];
    const lastName = indianLastNames[Math.floor(Math.random() * indianLastNames.length)];
    return `${firstName} ${lastName}`;
  };

  // for Guest user have
  const getDeviceMetadata = async () => {
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    // Fetching random user data (including profile picture)
    const response = await fetch("https://randomuser.me/api/");
    const randomData = await response.json();

    const randomName = generateIndianName();
    const randomProfilePic = randomData.results[0].picture.large;

    return {
      ipAddress: ipData.ip,
      deviceId: result.visitorId,
      userName: randomName,
      profilePic: randomProfilePic,
    };
  };

  const handleClick = async () => {
    const deviceMetadata = await getDeviceMetadata();
    const response = await fetch(`${API_BASE_URL}/v1/service/create-guest-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deviceMetadata),
    });
    const data = await response.json();
    // Store the response in localStorage
    localStorage.setItem("guestUser", JSON.stringify(data));
    console.log("Guest user stored in localStorage:", data);
  };

  useEffect(() => {
    const storedGuestUser = localStorage.getItem("guestUser");

    if (!storedGuestUser) {
      handleClick();
    }
  }, []);

  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={styles.headerContainer}>
      <Toolbar sx={styles.toolbarCSS}>
        <Box sx={styles.logoContainer}>
          <Link href="/" passHref>
            <Image
              src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Home/tech4logic.svg"
              width={190}
              height={55}
              alt="logo"
              priority={true}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Box>

        <Box sx={styles.tabContainer}>
          <Box sx={styles.desktopTabs}>
            {menuItems?.map((item) => (
              <Box
                key={item.label}
                onMouseEnter={(event) => handleMenuItemMouseEnter(event, item)}
                onMouseLeave={handleMenuItemMouseLeave}
                sx={styles.menuItemCSS}
              >
                <Link href={`/${item.path}`} passHref>
                  <Typography variant="h1" sx={styles.tabContainer["& h1"]}>
                    {item.label}
                  </Typography>
                </Link>
                {item.isPopup && megaMenuOpen && activeMenuItem === item.label && (
                  <MegaMenuComponent
                    selectedSubTab={selectedSubTab}
                    isPopoverOpen={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    getSubItems={getSubItems}
                    menuData={menuData}
                    setSelectedSubTab={setSelectedSubTab}
                    onClose={() => {
                      setMegaMenuOpen(false);
                      setActiveMenuItem(null);
                      setAnchorEl(null);
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={styles.actionContainer}>
          <Link href="/" passHref>
            <Button variant="contained" sx={styles.letsTalkBtn}>
              Let's Talk <MdOutlineArrowOutward />
            </Button>
          </Link>

          <IconButton color="inherit" sx={styles.mobileMenuButton} onClick={toggleDrawer(true)}>
            <FaBars size={24} />
          </IconButton>
        </Box>

        <MobileViewTab
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          menuItems={menuItems}
          toggleDrawer={toggleDrawer}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
