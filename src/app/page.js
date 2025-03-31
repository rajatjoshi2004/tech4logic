import HomeComponent from "@/Components/Features/Home";
import { API_BASE_URL } from "@/constant/appConstants";
import { Box } from "@mui/material";

export default async function Home() {
  const res = await fetch(`${API_BASE_URL}/v1/tech4logic/home`, {
    cache: "no-store",
  });

  const { data } = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch data");
  }

  return (
    <Box>
      <HomeComponent data={data} />
    </Box>
  );
}
