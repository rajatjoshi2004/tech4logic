import AboutDetails from "@/Components/Features/About/AboutDetails";
import AboutOurWork from "@/Components/Features/About/AboutOurWork";
import AboutUsBanner from "@/Components/Features/About/Banner";
import CorporateCulture from "@/Components/Features/About/CorporateCulture";
import OurLeaders from "@/Components/Features/About/OurLeaders";
import OurMissionComponent from "@/Components/Features/About/OurMission";
import { API_BASE_URL } from "@/constant/appConstants";
import { Box } from "@mui/material";

export default async function About() {
  const res = await fetch(`${API_BASE_URL}/v1/tech4logic/about`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch data");
  }

  return (
    <Box>
      <AboutUsBanner aboutdata={data?.banners?.[0]} />
      <AboutDetails aboutDetailsdata={data?.aboutDetails?.[0]} />
      <AboutOurWork aboutworkData={data?.aboutwork?.[0]} />
      <OurMissionComponent outMissionContentData={data?.ourMissionData} />
      <OurLeaders leaderContentData={data?.leaderContent?.[0]} />
      <CorporateCulture corporateAPIContentData={data?.corporateCultureData?.[0]} />
    </Box>
  );
}
