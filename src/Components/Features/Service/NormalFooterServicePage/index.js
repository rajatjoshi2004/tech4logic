"use client";

import { Box, CircularProgress } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Tech4LogicWithPartners from "./About";
import NetworkingBanner from "./Banner";
import CardComponent from "./NetWorkingCard";
import NetWorkingPartner from "./Partner";
import { API_BASE_URL } from "@/constant/appConstants";

const ServiceComponentGroup = ({ serviceData }) => {
  const { banner, whyCloudInfo, partners, ourRangeOfCloudinfo } = serviceData?.data || {};
  return (
    <>
      <NetworkingBanner bannerVideodata={banner} />
      <Tech4LogicWithPartners tech4LogicCardData={whyCloudInfo} />
      <NetWorkingPartner partnerData={partners} />
      <CardComponent carddataValue={ourRangeOfCloudinfo} />
    </>
  );
};

export const serviceComponents = {
  "Cloud-Services": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Cybersecurity-Solutions": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Infrastructure-Solutions": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Software-Licensing": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Machine-Learning": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Web-Development": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "UI-UX-Design": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Graphic-Design": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  SEO: (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Digital-Marketing": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Social-Media-Marketing": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
  "Content-Marketing": (props) => <ServiceComponentGroup serviceData={props.serviceData} />,
};

const NormalFooterServiceComponentInner = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [serviceData, setServiceData] = useState(null);

  const Component = serviceComponents[tab];

  const fetchServiceData = async (serviceType) => {
    let apiUrl;
    switch (serviceType) {
      case "Cloud-Services":
        apiUrl = `${API_BASE_URL}/v1/service/cloud-services`;
        break;
      case "Cybersecurity-Solutions":
        apiUrl = `${API_BASE_URL}/v1/service/cybersecurity-solutions`;
        break;
      case "Infrastructure-Solutions":
        apiUrl = `${API_BASE_URL}/v1/service/infrastructure-solutions`;
        break;
      case "Software-Licensing":
        apiUrl = `${API_BASE_URL}/v1/service/software-licensing`;
        break;
      case "Machine-Learning":
        apiUrl = `${API_BASE_URL}/v1/service/machine-learning`;
        break;
      case "Web-Development":
        apiUrl = `${API_BASE_URL}/v1/service/web-development`;
        break;
      case "UI-UX-Design":
        apiUrl = `${API_BASE_URL}/v1/service/ui-ux-design`;
        break;
      case "Graphic-Design":
        apiUrl =  `${API_BASE_URL}/v1/service/graphic-design`;
        break;
      case "SEO":
        apiUrl = `${API_BASE_URL}/v1/service/seo`;
        break;
      case "Digital-Marketing":
        apiUrl = `${API_BASE_URL}/v1/service/digital-marketing`;
        break;
      case "Social-Media-Marketing":
        apiUrl = `${API_BASE_URL}/v1/service/social-media-marketing`;
        break;
      case "Content-Marketing":
        apiUrl = `${API_BASE_URL}/v1/service/content-marketing`;
        break;
      default:
        apiUrl = `${API_BASE_URL}/v1/service/${serviceType.toLowerCase()}-home`;
        break;
    }
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error(`Failed to fetch ${serviceType} data`);
      const data = await response.json();
      setServiceData(data);
    } catch (error) {
      console.error(`Error fetching ${serviceType} data:`, error);
      setServiceData(null);
    }
  };

  useEffect(() => {
    if (tab) {
      fetchServiceData(tab);
    }
  }, [tab]);

  return (
    <Box>
      {Component ? <Component serviceData={serviceData} /> : `Service not available for ${tab}.`}
    </Box>
  );
};

export const NormalFooterServiceComponent = () => (
  <Suspense fallback={<CircularProgress />}>
    <NormalFooterServiceComponentInner />
  </Suspense>
);
