"use client"
import BBDatePicker from "@/components/Form/BBDatePicker";
import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import BBSelectField from "@/components/Form/BBSelectField";
import { useGetMeQuery, useUpdateByMeMutation } from "@/redux/api/authApi";
import { bloodGroupsType, district, formatBloodType } from "@/types";
import { dateFormatter } from "@/utils/dateFormetter";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";


import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface IFormInput {
  name: string;
  bloodType: keyof typeof bloodGroupsType; // Ensure bloodGroup matches the keys of bloodGroupMapping
  location: string[];
  bio: string;
  age: string | number;
  donateblood: string;
  availability: string;
  lastDonationDate: string | Date | undefined | any;
}
const ProfilePage = () => {
  const { data: me, isLoading } = useGetMeQuery("");
  const router = useRouter();
  const [updateByMe] = useUpdateByMeMutation();
  const handleUpdate = async (data: IFormInput) => {
    console.log(data);
    data.lastDonationDate = dateFormatter(data.lastDonationDate);
    data.age = Number(data.age);
    console.log({ data });
    try {
      const res = await updateByMe({
        ...data,
        bloodType: bloodGroupsType[data.bloodType],
      });
      console.log(res);
      if (res) {
        toast.success(res.data.message);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Optional overlay
      zIndex: 10, // Make sure it's on top of other content
    }}
  >
    <CircularProgress />
  </Box>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {/* Left Side: Profile Info */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
              padding: 4,
              textAlign: "center",
            }}
          >
            <Avatar
              //   src={newProfilePicture ? URL.createObjectURL(newProfilePicture) : user.profilePicture}
              sx={{ width: 150, height: 150, margin: "0 auto", mb: 3 }}
            />
            <Typography variant="h6" fontWeight="bold">
             {me?.data?.name}
            </Typography>
            <Typography variant="body1">Email: {me?.data?.email}</Typography>
            <Typography variant="body1">Blood Type: {formatBloodType(me?.data?.bloodType)}</Typography>
            <Typography variant="body1">Location: {me?.data?.location}</Typography>
            <Typography variant="body1">Age: {me?.data?.userProfile?.age}</Typography>
            <Typography variant="body1">Bio: {me?.data?.userProfile?.bio}</Typography>
            <Typography variant="body1">Last Donation Date: {me?.data?.userProfile?.lastDonationDate}</Typography>
            
          </Box>
        </Grid>

        {/* Right Side: Profile Update Form */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
              padding: 4,
            }}
          >
            {/* Update Form Fields */}

            <Container>
              <Box my={7}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                  Update Profile
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
                      availability:
                        me?.data?.availability === false
                          ? "false"
                          : me?.data?.availability === true
                          ? "true"
                          : "",
                      lastDonationDate: undefined,
                    }}
                  >
                    <Grid container spacing={3} my={1}>
                      <Grid item md={6}>
                        <BBInput
                          name="name"
                          fullWidth
                          label="Name"
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
                          items={["Yes", "No"]}
                          name="donateblood"
                          fullWidth
                          label="Donate Blood"
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
                  </BBForm>
                </Box>
              </Box>
            </Container>

            {/* Update Form Fields End */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
