"use client"

import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import BBSelectField from "@/components/Form/BBSelectField";
import BBDatePicker from "@/components/Form/BBDatePicker";

import { toast } from "sonner";
import { userLogin } from "@/services/action/userLogin";
import { storeUserInfo } from "@/services/authService";
import { useRouter } from "next/navigation";
import { register } from "@/services/action/register";
import { bloodGroupsType, district } from "@/types";
import { dateFormatter } from "@/utils/dateFormetter";
import { registerValidationSchema } from "@/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bloodType: keyof typeof bloodGroupsType;
  location: string;
  age: string | number;
  bio: string;
  donateblood: string;
  lastDonationDate: string | Date | undefined | any;
}
const registrationValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  bloodType: "",
  location: "",
  age: "",
  bio: "",
  donateblood: "",
  lastDonationDate: undefined
};

const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = async (data: IFormInput) => {
  console.log(data)
    data.lastDonationDate = dateFormatter(data.lastDonationDate);
    data.age = Number(data.age);
  
    try {
      const res = await register({
        ...data,
        email: data.email,
        bloodType: bloodGroupsType[data.bloodType],
      });
      console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: data.password,
          email: data.email,
        });
        
        if (result?.data?.token) {
          storeUserInfo(result?.data?.token);
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
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
                <Button disabled
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: "http://localhost:3000/dashboard",
                    })
                  }
                >
                  <GitHubIcon />
                </Button>
                <Button disabled onClick={() => signIn("google")}>
                  <GoogleIcon />
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box sx={{ flex: 1, my: 4 }}>
            <Typography variant="h6" fontWeight={700}>
              Register
            </Typography>

            <Box>
              <BBForm
                onSubmit={handleRegister}
                // resolver={zodResolver(registerValidationSchema)}
                defaultValues={registrationValues}
              >
                <Grid container spacing={3} my={1}>
                  <Grid item md={6}>
                    <BBInput required name="name" fullWidth label="Name" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput
                      name="email"
                      fullWidth
                      label="Email"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput
                    required
                      name="password"
                      fullWidth
                      label="Password"
                      size="small"
                    />
                  </Grid>
                  
                  <Grid item md={6}>
                    <BBSelectField
                    required
                      items={Object.keys(bloodGroupsType)}
                      name="bloodType"
                      fullWidth
                      label="BloodType"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBSelectField
                    required
                      items={district}
                      name="location"
                      fullWidth
                      label="Location"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBSelectField
                    required
                      items={["Yes", "No"]}
                      name="donateblood"
                      fullWidth
                      label="Donate Blood"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput required name="age" fullWidth label="Age" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <BBInput required name="bio" fullWidth label="Bio" size="small" />
                  </Grid>
                  <Grid item md={6}>
                    <BBDatePicker
                    required
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
