import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import heroImage from "@/assets/heroImages.jpg";
const HeroSection = () => {
  return (
    <Box bgcolor={"#FAFAFA"}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={"center"}
          py={10}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" fontWeight={700} my={3}>
              Donate Blood <br />
              Save Life !
            </Typography>
            <Typography fontWeight={400}>
              Instantly Connecting Generous Donors with Those <br /> in Need for
              Life-Saving Blood Donations
            </Typography>
            <Stack direction={"row"} gap={3} my={3}>
              <Button> Join as a Donar</Button>
              <Button variant="outlined">Search Donors</Button>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Image
              style={{
                borderRadius: "50% 50% 50% 0%",
                borderBottom: "8px solid red",
                borderLeft: "8px solid red",
              }}
              src={heroImage}
              alt="Donate Blood"
              height={600}
              width={500}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
