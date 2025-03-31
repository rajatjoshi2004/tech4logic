"use client";

import { ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { lightTheme } from "./theme";
import React from "react";

const PageThemeProvider = ({ children }) => {
  const [themeConfig, setThemeConfig] = useState(lightTheme);

  useEffect(() => {
    setThemeConfig(lightTheme);
  }, []);

  return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
};

export default PageThemeProvider;
