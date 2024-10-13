import { Box, Container, Stack, Typography } from "@mui/material";

const DonationProcess = () => {
  return (
    <Box mt={10} py={8} bgcolor={'#FCE0DF'}>
      <Container>
        <Stack direction={"column"} spacing={2} my={5}>
          <Typography variant="h4" fontWeight={700}>
            Donation Process
          </Typography>
          <Typography component={"p"} fontWeight={500} width={1 / 3}>
            {" "}
            Follow These Simple Steps to Instantly Save Lives and Make a
            Difference in Your Community
          </Typography>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} gap={2}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "#4D49E1",
              }}
            >
              1
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              Registration
            </Typography>
            <Typography fontWeight={400}>
              Sign up with BloodBucket by providing your basic information and
              blood type. Join our community of heroes and start saving lives
              today.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "#FCB70B",
              }}
            >
              2
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              Screening
            </Typography>
            <Typography fontWeight={500}>
              Before donating, you will undergo a quick screening to check your
              health and eligibility. This ensures the safety of both donors and
              recipients, making every donation as effective as possible.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "#6EF1E5",
              }}
            >
              3
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              Donation
            </Typography>
            <Typography fontWeight={500}>
              During the donation process, a small amount of blood is collected
              from you in a safe and comfortable setting. This simple act can
              save lives and make a significant impact in your community. Thank
              you for your generosity
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "#F3A160",
              }}
            >
              4
            </Typography>
            <Typography variant="h6" fontWeight={700}>
              Refreshment
            </Typography>
            <Typography fontWeight={400}>
              Refreshment: Replenish and Relax After donating, enjoy
              complimentary refreshments to help you recover and replenish your
              energy. It is our way of saying thank you for your life-saving
              contribution.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default DonationProcess;
