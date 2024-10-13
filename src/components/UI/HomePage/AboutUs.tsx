import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const AboutUs = () => {
  return (
    <Box
      mt={5}
      bgcolor={"primary.main"}
      width={"95%"}
      sx={{
        borderStartEndRadius: 50,
      }}
    >
      <Container>
        <Stack
          direction={{sm:"column",md:"row"}}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
        >
          <Box py={5} sx={{ flex: 5 }}>
            <Typography variant="h4" fontWeight={700} color={"#FFFF"}>
              We ara helping people from 10 years
            </Typography>
            <Typography component={"p"} fontWeight={400} color={"#FFFF"} my={2}>
              Welcome to BloodBucket, your trusted partner in saving lives
              through blood donation. Our mission is to facilitate a seamless
              connection between generous blood donors and those in urgent need,
              creating a lifeline for countless individuals.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Link href={"/about"}>
              <Box
                sx={{
                  bgcolor: "#FFFF",
                  textAlign: "center",
                  fontWeight: 600,
                  paddingY: 2,
                  paddingX: 1,
                  borderStartEndRadius: 0,
                  borderTopLeftRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  marginBottom:2
                }}
              >
                Learn More <ArrowRightAltIcon/>
              </Box>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
