import { Box, Container, Typography } from "@mui/material";

const FooterBottom = () => {
  return (
    <Box bgcolor={"#333333"}>
      <Container>
        <Typography py={4} color={"#FFFF"} textAlign={"center"} fontWeight={600}>
          Copyright &copy; Colored-Web 2024 - Present | Made with Abul Ala
          Jobayar
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterBottom;
