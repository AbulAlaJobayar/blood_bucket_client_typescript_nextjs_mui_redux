"use client";

import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { userLogin } from "@/services/action/userLogin";
import { storeUserInfo } from "@/services/authService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

 const validationSchema = z.object({
  email: z.string().email("please enter a valid email!"),
  password: z.string().min(5, "password must be at last 5 characters"),
});

const LoginPage = () => {
  const [error,setError]=useState()
  const router=useRouter()
  const handleLogin = async(data: FieldValues) => {
    // console.log(data)
    try {
      const res = await userLogin(data);
      
      console.log(res);
      if (res?.data?.token) {
        storeUserInfo(res?.data?.token);
        toast.success(res.message);
        router.push("/");
        
      } else {
        setError(res.message)
        toast.error(res?.message ? res?.message : "something went wrong");
      }
    } catch (error: any) {
      console.log(error.message);
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
              Login with BLood Bucket
            </Typography>
            <Typography fontWeight={400}>
              Login with us to avail all the features.
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
                Login with
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
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight={700}>
              Login
            </Typography>

            <Box>
              <BBForm
                onSubmit={handleLogin}
                resolver={zodResolver(validationSchema)}
                defaultValues={{ email: "", password: "" }}
              >
                <Grid container spacing={3} my={1}>
                  <Grid item md={12}>
                    <BBInput
                      name="email"
                      fullWidth
                      label="Email"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={12}>
                    <BBInput
                      name="password"
                      fullWidth
                      label="Password"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Typography
                  my={2}
                  textAlign={"end"}
                  component="p"
                  fontWeight={300}
                >
                  Forgot Password?
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    margin: "10px 0px",
                  }}
                >
                  Login
                </Button>
                <Typography component="p" fontWeight={300}>
                  Don&apos;t have an account?{" "}
                  <span style={{ color: "blue" }}>
                    <Link color="blue" href={"/register"}>
                      Create an account
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

export default LoginPage;
