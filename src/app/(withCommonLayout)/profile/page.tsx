"use client";
import BBDatePicker from "@/components/Form/BBDatePicker";
import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import BBSelectField from "@/components/Form/BBSelectField";
import { useGetMeQuery, useUpdateByMeMutation } from "@/redux/api/authApi";
import { bloodGroupsType, district, formatBloodType } from "@/types";
import { dateFormatter } from "@/utils/dateFormetter";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

interface IFormInput {
  name: string;
  bloodType: keyof typeof bloodGroupsType; // Ensure bloodGroup matches the keys of bloodGroupMapping
  location: string[];
  age: string | number;
  bio: string;
  donateblood:string;
  lastDonationDate: string | Date | undefined | any;
}

const ProfilePage = () => {
  const {data:me,isLoading}=useGetMeQuery('')

const [updateByMe]=useUpdateByMeMutation()
  const handleUpdate=async(data:IFormInput)=>{
    data.lastDonationDate = dateFormatter(data.lastDonationDate);
    data.age = Number(data.age);
    try {
      const res = await updateByMe({
        ...data,
        bloodType: bloodGroupsType[data.bloodType],
      });
      console.log(res);
    } catch (error) {
      
    }
  }
  if(isLoading){
    return(
    <>
    loading...........
    </>)
  }
  console.log(me?.data?.location)
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
      
          <Box  my={7}>
            <Typography variant="h6" fontWeight={700}>
              Update Your Profile
            </Typography>
            <Box>
              <BBForm
                onSubmit={handleUpdate}
                // resolver={zodResolver(validationSchema)}
                defaultValues={{
                  name: me?.data?.name,
                  bloodType:formatBloodType(me?.data?. bloodType)||"",
                  location:  me?.data?.location||"",
                  donateblood:me?.data?.userProfile?.donateblood||"",
                  age:me?.data?.userProfile?.age||"",
                  bio:me?.data?.userProfile?.bio ||"",
                  lastDonationDate:undefined
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
                  <Box component={'span'} style={{ color: "blue" }}>
                    <Link color="blue" href={"/login"}>
                     Change Password
                    </Link>
                  </Box>
                </Typography>
              </BBForm>
            </Box>
          </Box>
      </Container>
    </Box>
  );
};

export default ProfilePage;
