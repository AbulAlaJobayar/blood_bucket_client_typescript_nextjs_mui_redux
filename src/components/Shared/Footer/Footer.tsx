import ShapeDivider from "@/components/UI/ShapeDiveder/ShapeDivider";
import TopShapeDivider from "@/components/UI/TopShapeDiveder.tsx/TopShapeDivider";
import { Style } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/logo/brandLogo.png";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <Box bgcolor={"primary.main"} sx={{ position: "relative" }}>
      <Container>
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          gap={4}
          mx={"auto"}
          py={8}
        >
          <Box sx={{ flex: 1 }}>
            <Link href="/">
              <Image src={logo} alt="Blood-Bucket" height={100} width={100} />
            </Link>
            <Typography sx={{ my: 2, color: "#FFFF", fontWeight: "600" }}>
              BloodBucket: Instantly Connecting Life-Saving Donors and Seekers
              Through Our Innovative Website
            </Typography>

            <Stack direction={"row"} spacing={2}>
              <Link
                href={"https://www.facebook.com/profile.php?id=100010086635226"}
              >
                <FacebookIcon />
              </Link>
              <Link href={"www.linkedin.com/in/abul-ala-jobayar-4972b5202"}>
                <LinkedInIcon />
              </Link>
              <Link href={"https://wa.me/+8801928210545?text=MESSAGE"}>
                <WhatsAppIcon />
              </Link>
            </Stack>
            <Stack direction={"row"} mt={2}>
              Terms & condition <Box sx={{ color: "#FFFF", px: 1 }}>|</Box>
              Privacy Policy
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              fontWeight={700}
              color={"#FFFF"}
              sx={{ padding: "10px,0px", mb: 4 }}
            >
              Important Links
            </Typography>
            <Stack direction={"column"} gap={2} pt-4>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                  Home
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                  Add Blood Request
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                  Frequently Asked Questions (FAQs)
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                  About Us
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                  Contact Us
                </Typography>
              </Link>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
          <Typography
              variant="h5"
              fontWeight={700}
              color={"#FFFF"}
              sx={{ padding: "10px,0px", mb: 4 }}
            >
              About Blood
            </Typography>
            <Stack direction={"column"} gap={2} pt-4>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                What is blood?
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                What is blood donation?
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                Who can donate blood?
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                How often can I donate blood?
                </Typography>
              </Link>
              <Link href={"#"}>
                <Typography color={"#FFFF"} fontWeight={600}>
                Different Blood Terms
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <TopShapeDivider />
    </Box>
  );
};

export default Footer;
