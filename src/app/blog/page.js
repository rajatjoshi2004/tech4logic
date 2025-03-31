import BannerPart from "@/Components/Features/Blog/BannerPart";
// import BlogCard from "@/Components/Features/Blog/BlogCard";
import BlogListing from "@/Components/Features/Blog/BlogListing";
import { Box } from "@mui/material";

export default async function Blog() {
  return (
    <Box>
      <BannerPart />
      {/* <BlogCard
        date="5 Nov"
        tags={["Technology", "HR"]}
        title="How AR and VR Strategy is Helpful for Your Business?"
        description="Let go of any preconceived notion that Augmented Reality (AR) and Virtual Reality (VR) are just flashy gadgets or limited to gaming sensations like Pokemon Go. It’s time for a business revolution!"
      /> */}
      <BlogListing/>
    </Box>
  );
}
