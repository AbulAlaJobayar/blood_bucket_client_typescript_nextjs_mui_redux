"use client";
import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z
  .object({
    oldPassword: z.string().nonempty("Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirmation password must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
const ChangePasswordPage = () => {
  const router=useRouter()
  const [ChangePassword] = useChangePasswordMutation();
  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    const inputValues = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };
    try {
      const res = await ChangePassword(inputValues).unwrap();
      if (res?.statusCode === 200) {
        toast.success(res.message);
        router.push("/profile")
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error)
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
              Change your Password
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={700}>
            Change Password
          </Typography>

          <Box>
            <BBForm
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={3} my={1}>
                <Grid item md={12}>
                  <BBInput
                    name="oldPassword"
                    fullWidth
                    label="Current password"
                    size="small"
                  />
                </Grid>
                <Grid item md={12}>
                  <BBInput
                    name="newPassword"
                    fullWidth
                    label="New password"
                    size="small"
                  />
                </Grid>
                <Grid item md={12}>
                  <BBInput
                    name="confirmPassword"
                    fullWidth
                    label="Confirm new password"
                    size="small"
                    type="password"
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
                Submit
              </Button>
            </BBForm>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChangePasswordPage;
