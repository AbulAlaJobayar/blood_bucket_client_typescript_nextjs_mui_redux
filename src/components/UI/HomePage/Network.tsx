import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import RoomIcon from '@mui/icons-material/Room';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
const Network = () => {
  return (
    <Box my={15}>
      <Container>
        <Stack direction={"column"} spacing={2} my={5}>
          <Typography variant="h4" fontWeight={700}>
            We&#39;re a network of
          </Typography>
          <Typography component={"p"} fontWeight={500} width={1 / 3}>
            {" "}
            We&#39;re a network of dedicated individuals committed to saving
            lives.
          </Typography>
        </Stack>
        <Grid container spacing={2} mx={'auto'}>
          <Grid item xs={12} md={4}>
            <Stack alignItems={"center"}>
              <GroupIcon sx={{ height: "100px", width: "100px" ,color:"primary.main"}}/>
            <Typography variant="h6" fontWeight={700}>
            300 Donors
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack alignItems={"center"}>
              <RoomIcon sx={{ height: "100px", width: "100px" ,color:"primary.main"}}/>
            <Typography variant="h6" fontWeight={700}>
            64 Districts
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack alignItems={"center"}>
              <WorkspacesIcon sx={{ height: "100px", width: "100px" ,color:"primary.main"}}/>
            <Typography variant="h6" fontWeight={700}>
            8 Blood Groups
            </Typography>
            </Stack>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
};

export default Network;
