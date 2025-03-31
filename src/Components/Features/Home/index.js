import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Banner from "./Banner";
import { ParallaxAnimationComponent } from "./ParallaxComponent";
import Partner from "./Partner";
import ServiceComponent from "./Service";

const OurBestOfferingsComponent = dynamic(() => import("./OurBestOfferings"), { suspense: true });
const OurTeamComponent = dynamic(() => import("./OurTeam"), { suspense: true });
const TestimonialComponent = dynamic(() => import("./Testimonial"), { suspense: true });

const HomeComponent = ({ data }) => {
  return (
    <Box>
      <Banner bannerData={data?.banners} />
      <Partner partnerData={data?.partners} />
      <ServiceComponent serViceData={data?.services} />
      <ParallaxAnimationComponent />

      <Suspense fallback={<Box>Loading Our Best Offerings...</Box>}>
        <OurBestOfferingsComponent offeringsData={data?.offerings} />
      </Suspense>

      <Suspense fallback={<Box>Loading Our Team...</Box>}>
        <OurTeamComponent teamMembersData={data?.teamMembers} />
      </Suspense>

      <Suspense fallback={<Box>Loading Testimonials...</Box>}>
        <TestimonialComponent testimonialsData={data?.testimonials} />
      </Suspense>
    </Box>
  );
};

export default HomeComponent;
