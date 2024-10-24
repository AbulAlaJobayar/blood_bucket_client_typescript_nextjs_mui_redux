"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useEffect, useState } from "react";
import { userLogin } from "@/services/action/userLogin";
import { storeUserInfo } from "@/services/authService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";

const validationSchema = z.object({
  email: z.string().email("please enter a valid email!"),
  password: z.string().min(5, "password must be at last 5 characters"),
});

const LoginPage = () => {
  const [error, setError] = useState();
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // set Role
  const handleRoleChange = (e: SelectChangeEvent<string>) => {
    console.log(e.target.value);
    const selectedRole = e.target.value;
    setRole(selectedRole);
  };
  useEffect(() => {
    if (role === "user") {
      setEmail("user@gmail.com");
      setPassword("user123456");
    } else {
      setEmail("admin@gmail.com");
      setPassword("admin123456");
    }
  }, [role]);

  // Handle login
  const handleLogin = async (values: FieldValues) => {
    console.log(values);
    try {
      const res = await userLogin(values);
      console.log(res?.data?.token);
      if (res?.data?.token) {
        storeUserInfo(res?.data?.token);
        toast.success(res.message);
      } else {
        setError(res.message);
        toast.error(res?.message ? res?.message : "something went wrong");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  // set default value
  const defaultValues = {
    email: "",
    password: "",
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
          {/* login Credential */}
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
                Credential
              </Typography>
              <Box mt={5} maxWidth={"500px"}>
                <FormControl fullWidth margin="normal">
                  <Select value={role} onChange={handleRoleChange}>
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {role && (
                <>
                  <Card
                    variant="outlined"
                    sx={{ maxWidth: "500px", margin: "20px 0" }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="div" gutterBottom>
                        Credentials
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          mb={2}
                          sx={{
                            display: "flex",
                            alignItems:"center",
                            justifyContent:'center',
                            gap: 2,
                            backgroundColor: "#EB2C29",
                            borderRadius: "3px",
                            padding:"2px 8px",
                            boxShadow: 0

                          }}
                        >
                          <Typography  color="white" fontWeight='500'>
                            Email:
                          </Typography>
                          <Typography  sx={{ color: "white" }} fontWeight='500'>
                            {email}
                          </Typography>
                        </Box>
                        <Box
                          mb={2}
                          sx={{
                            display: "flex",
                            alignItems:"center",
                            justifyContent:'center',
                            gap: 2,
                            backgroundColor: "#EB2C29",
                            borderRadius: "3px",
                            padding:"2px 8px",
                            boxShadow: 0

                          }}
                        >
                          <Typography  color="white" fontWeight='500'>
                            Password:
                          </Typography>
                          <Typography  sx={{ color: "white" }} fontWeight='500'>
                            {password}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </>
              )}
              
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
                defaultValues={defaultValues}
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
