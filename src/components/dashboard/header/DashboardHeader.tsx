import { Box, Container, Typography } from "@mui/material";

const DashboardHeader = ({title,subTitle}:{title:string; subTitle:string}) => {
  return (
    <Box
        bgcolor={"#FCE0DF"}
        sx={{ borderRadius:2 }}
      >
        <Container>
          <Box py={4}>
            <Typography variant="h5" fontWeight={700}>
              {title}
            </Typography>
            <Typography fontWeight={400} pt={1}>
              {subTitle}
            </Typography>
          </Box>
        </Container>
      </Box>
  );
};

export default DashboardHeader;