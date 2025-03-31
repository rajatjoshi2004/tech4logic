"use client";

import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@/Components/Common/Layout";
import PageThemeProvider from "@/styles/PageThemeProvider";
import AOS from "aos";
import createEmotionCache from "@/styles/createEmotionCache";
import { useEffect } from "react";

export default function AuthLayout({ children }) {

   useEffect(() => {
    AOS.init();
  }, []);

  return (
    <CacheProvider value={createEmotionCache()}>
      <PageThemeProvider>
        <CssBaseline />
        <Layout>{children}</Layout>
      </PageThemeProvider>
    </CacheProvider>
  );
}
