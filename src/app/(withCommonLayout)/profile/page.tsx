"use client"
import BBDatePicker from "@/components/Form/BBDatePicker";
import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import BBSelectField from "@/components/Form/BBSelectField";
import { bloodGroupsType, district } from "@/types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const ProfilePage = () => {
  return (
    <Box>
      <Box
        bgcolor={"#FCE0DF"}
        sx={{ clipPath: "polygon(100% 0, 100% 100%, 28% 76%, 0 100%, 0 0)" }}
      >
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              Profile
            </Typography>
            <Typography fontWeight={400}>
              Update And Maintain Your Profile
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ flex: 1, my: 4 }}>
            <Typography variant="h6" fontWeight={700}>
              Register
            </Typography>

            <Box>
              <BBForm
                onSubmit={'handleLogin'}
                // resolver={zodResolver(validationSchema)}
                defaultValues={{
                  name: "",
                  email: "",
                  password: "",
                  bloodType: "",
                  location: "",
                  lastDonationDate: undefined,
                }}
              >
                <Grid container spacing={3} my={1}>
                  <Grid item md={6}>
                    <BBInput name="name" fullWidth label="Name" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput
                      name="email"
                      fullWidth
                      label="Email"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput
                      name="password"
                      fullWidth
                      label="Password"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBSelectField
                      items={Object.keys(bloodGroupsType)}
                      name="bloodType"
                      fullWidth
                      label="BloodType"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBSelectField
                      items={district}
                      name="location"
                      fullWidth
                      label="Location"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBSelectField
                      items={["Yes","No"]}
                      name="donateblood"
                      fullWidth
                      label="Donate Blood"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput name="age" fullWidth label="Age" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput name="bio" fullWidth label="Bio" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <BBDatePicker
                      name="lastDonationDate"
                      fullWidth
                      label="Last Donation Date"
                      size="small"
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  Register
                </Button>
                
              </BBForm>
            </Box>
            </Box>
    </Box>
  );
};

export default ProfilePage;
