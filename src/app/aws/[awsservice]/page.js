"use client";

import AWSCommonBanner from "@/Components/Common/AWSBanner";
import { AboutSection } from "@/Components/Features/AWSAllServices/About";
import { ContactFormSection } from "@/Components/Features/AWSAllServices/ContactFormSection";
import { ServiceCardSection } from "@/Components/Features/AWSAllServices/ServiceCard";
import { Box } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";

export default function Service() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  console.log("Pathname:", pathname);
  console.log("Tab query parameter:", tab);

  const bannerData = [
    {
      videourl:
        "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Analytics/AWService.mp4",
      title: "Analytics",
    },
  ];

  return (
    <Box>
      <AWSCommonBanner bannerData={bannerData} />
      <AboutSection />
      <ServiceCardSection />
      <ContactFormSection />
      {/* {tab === "analytics" && <div>Analytics Tab Content</div>} */}
    </Box>
  );
}
