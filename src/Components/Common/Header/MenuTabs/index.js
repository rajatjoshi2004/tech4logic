import { Box, Button, Divider } from "@mui/material";
import React from "react";
import styles from "../MegaMenuComponent/style";

const MenuTabs = ({ menuData, selectedSubTab, setSelectedSubTab, titleRefs }) => {
  return (
    <Box sx={styles.Conatiner}>
      {menuData?.map((subTab, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={() => setSelectedSubTab(subTab.name)}
            ref={(el) => (titleRefs.current[subTab.name] = el)}
            sx={{
              color: selectedSubTab === subTab?.name ? "#ff8300" : "#fff",
              borderBottom: "none",
            }}
          >
            {subTab.name}
          </Button>
          {index < menuData?.length - 1 && (
            <Divider orientation="vertical" flexItem sx={styles.divderContainer} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MenuTabs;
