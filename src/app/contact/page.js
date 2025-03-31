import ContactDetails from "@/Components/Features/Contact/ContactCard";
import ContactComponent from "@/Components/Features/Contact/ContactComponent";
import MapSection from "@/Components/Features/Contact/MapSection";
import OurPresence from "@/Components/Features/Contact/OurPresence";
import { API_BASE_URL } from "@/constant/appConstants";
import { Box } from "@mui/material";

export default async function Contact() {
  const res = await fetch(`${API_BASE_URL}/v1/tech4logic/contact-details`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch data");
  }

  return (
    <Box>
      <ContactComponent />
      <ContactDetails ContactDetailsdata={data?.ContactDetails} />
      <OurPresence OurPresenceData={data?.OurPresence} />
      <MapSection LocationsData={data?.Locations} />
    </Box>
  );
}
