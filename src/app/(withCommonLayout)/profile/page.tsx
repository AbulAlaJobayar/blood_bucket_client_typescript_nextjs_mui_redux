"use client";
import BBDatePicker from "@/components/Form/BBDatePicker";
import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import BBSelectField from "@/components/Form/BBSelectField";
import { useGetMeQuery, useUpdateByMeMutation } from "@/redux/api/authApi";
import { bloodGroupsType, district, formatBloodType } from "@/types";
import { dateFormatter } from "@/utils/dateFormetter";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import MyBloodRequestPage from "./MyBloodRequest";
import RequestToMePage from "./RequestToMe";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IFormInput {
  name: string;
  bloodType: keyof typeof bloodGroupsType; // Ensure bloodGroup matches the keys of bloodGroupMapping
  location: string[];
  bio: string;
  age: string | number;
  donateblood: string;
  availability:string;
  lastDonationDate: string | Date | undefined | any;
}

const ProfilePage = () => {
  const { data: me, isLoading } = useGetMeQuery("");
const router=useRouter()
  const [updateByMe] = useUpdateByMeMutation();
  const handleUpdate = async (data: IFormInput) => {
    console.log(data) 
    data.lastDonationDate = dateFormatter(data.lastDonationDate);
    data.age = Number(data.age);
    console.log({data})
    try {
      const res = await updateByMe({
        ...data,
        bloodType: bloodGroupsType[data.bloodType],
      });
      console.log(res)
    if(res){
      toast.success(res.data.message)
      router.refresh()
    }
    } catch (error) {
      console.log(error)
    }
  };
  if (isLoading) {
    return <>loading...........</>;
  }

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
      <Container>
        <Box my={7}>
          <Typography variant="h6" fontWeight={700}>
            Update Your Profile
          </Typography>
          <Box>
            <BBForm
              onSubmit={handleUpdate}
              // resolver={zodResolver(validationSchema)}
              defaultValues={{
                name: me?.data?.name,
                bloodType: formatBloodType(me?.data?.bloodType) || "",
                location: me?.data?.location || "",
                donateblood: me?.data?.userProfile?.donateblood || "",
                age: me?.data?.userProfile?.age || "",
                bio: me?.data?.userProfile?.bio || "",
                availability: me?.data?.availability === false ? "false" 
                : me?.data?.availability === true ? "true" 
                : "",
                lastDonationDate: undefined,
              }}
            >
              <Grid container spacing={3} my={1}>
                <Grid item md={6}>
                  <BBInput name="name" fullWidth label="Name" size="small" />
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
                    items={["Yes", "No"]}
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
                  <BBSelectField
                    items={["true", "false"]}
                    name="availability"
                    fullWidth
                    label="Availability"
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
                Update
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you want to change your Password?{" "}
                <Box component={"span"} style={{ color: "blue" }}>
                  <Link color="blue" href={"/change-password"}>
                    Change Password
                  </Link>
                </Box>
              </Typography>
            </BBForm>
          </Box>
        </Box>
      </Container>
      <Divider sx={{ fontWeight: 700 }}>My Blood Requests</Divider>
      <Container>
        <MyBloodRequestPage />
      </Container>
      <Divider sx={{ fontWeight: 700 }}>Request For Blood </Divider>
      <Container>
        <RequestToMePage />
      </Container>
    </Box>
  );
};

export default ProfilePage;
