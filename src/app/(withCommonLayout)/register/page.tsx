"use client";

import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import BBSelectField from "@/components/Form/BBSelectField";
import BBDatePicker from "@/components/Form/BBDatePicker";

export const validationSchema = z.object({
  email: z.string().email("please enter a valid email!"),
  password: z.string().min(6, "password must be at last 6 characters"),
});

const RegisterPage = () => {
  const handleLogin = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Box>
      <Box
        bgcolor={"#FCE0DF"}
        sx={{ clipPath: "polygon(100% 0, 100% 100%, 28% 76%, 0 100%, 0 0)" }}
      >
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              Register with BLood Bucket
            </Typography>
            <Typography fontWeight={400}>
              Register with us to avail all the features.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box sx={{ flex: 1 }}>
            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ whiteSpace: "pre-wrap" }}
              >
                Register with
              </Typography>
              <Typography variant="h4" fontWeight={700}>
                Social Platforms
              </Typography>

              <Stack direction={"row"} spacing={2} my={2}>
                <Button
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: "http://localhost:3000/dashboard",
                    })
                  }
                >
                  <GitHubIcon />
                </Button>
                <Button onClick={() => signIn("google")}>
                  <GoogleIcon />
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box sx={{ flex: 1,my:4 }}>
            <Typography variant="h6" fontWeight={700}>
              Register
            </Typography>

            <Box>
              <BBForm
                onSubmit={handleLogin}
                resolver={zodResolver(validationSchema)}
                defaultValues={{ email: "", password: "" }}
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
                      items={["a+", "b+"]}
                      name="bloodType"
                      fullWidth
                      label="BloodType"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput
                      name="location"
                      fullWidth
                      label="Location"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput
                      name="age"
                      fullWidth
                      label="Age"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput
                      name="bio"
                      fullWidth
                      label="Bio"
                      size="small"
                    />
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
                <Typography component="p" fontWeight={300}>
                  Already have an account?{" "}
                  <span style={{ color: "blue" }}>
                    <Link color="blue" href={"/login"}>
                      Login
                    </Link>
                  </span>
                </Typography>
              </BBForm>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default RegisterPage;
