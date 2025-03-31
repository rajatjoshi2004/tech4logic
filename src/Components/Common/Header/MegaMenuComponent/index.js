"use client";

import { Box, IconButton, Popover } from "@mui/material";
import { useRouter } from "next/navigation";
import { memo, useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MenuTabs from "../MenuTabs";
import SubItemCard from "../SubItemCard";
import styles from "./style";

const MegaMenuComponent = memo(
  ({
    selectedSubTab,
    isPopoverOpen,
    anchorEl,
    getSubItems,
    setSelectedSubTab,
    onClose,
    menuData,
  }) => {
    const router = useRouter();
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    const containerRef = useRef(null);


    const handleCardClick = (subItem) => {
      const formattedSubTab = selectedSubTab.replace(/\s+/g, "_");
      const formattedSubItem = subItem.name.replace(/\s+/g, "_");
      const path = `/service/${formattedSubTab}?subTab=${formattedSubTab}&subItem=${formattedSubItem}`;
      router.push(path);
      setSelectedSubTab(null);
      onClose();
    };

    const handleMouseEnter = (index) => setHoveredCardIndex(index);
    const handleMouseLeave = () => setHoveredCardIndex(null);

    // Scroll handling function for arrows
    const handleScroll = (direction) => {
      if (containerRef.current) {
        const scrollAmount = direction === "left" ? -200 : 200;
        containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        const onWheel = (event) => {
          container.scrollLeft += event.deltaY;
        };
        container.addEventListener("wheel", onWheel);
        return () => container.removeEventListener("wheel", onWheel);
      }
    }, []);

    const titleRefs = useRef({});
    const subItems = getSubItems() || [];

    return (
      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{ sx: { ...styles.MegamenuContainer } }}
      >
        <MenuTabs
          menuData={menuData}
          selectedSubTab={selectedSubTab}
          setSelectedSubTab={setSelectedSubTab}
          titleRefs={titleRefs}
        />

        {/* Horizontal scrolling container with arrows */}
        <Box
          sx={{
            ...styles.megaMenuTabContainer,
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {subItems?.length > 4 && (
            <IconButton
              onClick={() => handleScroll("left")}
              sx={{
                position: "absolute",
                left: 0,
                zIndex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
            >
              <MdChevronLeft fontSize="large" />
            </IconButton>
          )}

          <Box
            ref={containerRef}
            sx={{
              overflowX: "auto",
              overflowY: "hidden",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              gap: "20px",
              padding: "20px",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {selectedSubTab &&
              subItems.map((subItem, index) => (
                <SubItemCard
                  key={index}
                  subItem={subItem}
                  hovered={hoveredCardIndex === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCardClick(subItem)}
                  index={index}
                />
              ))}
          </Box>

          {subItems?.length > 4 && (
            <IconButton
              onClick={() => handleScroll("right")}
              sx={{
                position: "absolute",
                right: 0,
                zIndex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              }}
            >
              <MdChevronRight fontSize="large" />
            </IconButton>
          )}
        </Box>
      </Popover>
    );
  },
);

export default MegaMenuComponent;
