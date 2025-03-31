import { serviceComponents, ServiceMainComponent } from "@/Components/Features/Service";
import { Box } from "@mui/material";

export default async function Service() {
  return (
    <Box>
      <ServiceMainComponent serviceComponents={serviceComponents} />
    </Box>
  );
}
