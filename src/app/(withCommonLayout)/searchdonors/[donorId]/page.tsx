"use client";
import { useGetSingleDonorQuery } from "@/redux/api/donorApi";
import SquareIcon from "@mui/icons-material/Square";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { formatBloodType } from "@/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BBForm from "@/components/Form/BBForm";
import BBInput from "@/components/Form/BBInput";
import BBSelectField from "@/components/Form/BBSelectField";
import BBDatePicker from "@/components/Form/BBDatePicker";
import Link from "next/link";
import useUserInfo from "@/hooks/useUserInfo";
import { isLoggedIn } from "@/services/authService";
import { RequestHandler } from "next/dist/server/next";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { dateFormatter } from "@/utils/dateFormetter";
import { useCreateRequestMutation } from "@/redux/api/requestApi";
import EmailIcon from '@mui/icons-material/Email';
//
const DonorDetailsPage = ({ params }: { params: { donorId: string } }) => {
  const userInfo = useUserInfo();
  console.log(userInfo.id)
  const [checked, setChecked] = useState(false);
  const isLogin = isLoggedIn();
  // console.log({isLogin})
  const route = useRouter();
  const { data: singleDonor, isLoading } = useGetSingleDonorQuery(
    params?.donorId
  );
  console.log({singleDonor})
  const donor = singleDonor?.data;
  const [createRequest] = useCreateRequestMutation();
  const handleRequest = async (data: FieldValues) => {
    if (!isLogin) {
      toast.error("please Login");
      route.push("/login");
    }
    
    const requestData = {
      donorId: params?.donorId,
      phoneNumber: data.phoneNumber,
      dateOfDonation: dateFormatter(data.dateOfDonation),
      hospitalName: data.hospitalName,
      hospitalAddress: data.hospitalAddress,
      reason: data.reason,
    };
    try {
      const res = await createRequest(requestData).unwrap();
      console.log(res)
      if (res?.data?.id) {
        toast.success(
          "Your Request Successfully Crated. Please Wait For Donor Response "
        );
        route.push("/searchdonors");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <>
        <Container>
          <Grid container>
            {Array.from(new Array(1)).map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                  my: "auto",
                  marginTop: 10,
                }}
              >
                <Box component={"span"}>
                  <Skeleton width={500} height={60} />
                  <Skeleton animation="wave" width={500} height={60} />
                  <Skeleton animation={false} width={500} height={60} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
let isAvailable 
if(singleDonor?.data?.requester){
  isAvailable=singleDonor?.data?.requester.find((requester:any)=>requester.requesterId==userInfo.id && requester.requestStatus== "APPROVED")
}
// console.log(singleDonor?.data?.requester.find((requester:any)=>{console.log(requester.id)}))
console.log(userInfo.id)
console.log(isAvailable)

  return (
    <Box>
      <Box bgcolor={"#F1F1F1"}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box py={10}>
              <Typography
                textTransform={"capitalize"}
                variant="h4"
                fontWeight={500}
                sx={{ mb: 5 }}
              >
                Profile of {donor?.name}
              </Typography>
              <Stack direction={"row"} spacing={3}>
                <Typography display={"flex"} alignItems={"center"} gap={1}>
                  {" "}
                  <SquareIcon fontSize="small" />
                  <Box component={"span"} sx={{ fontWeight: 400 }}>
                    {" "}
                    {formatBloodType(donor?.bloodType)}
                  </Box>
                </Typography>
                <Typography display={"flex"} alignItems={"center"} gap={1}>
                  {" "}
                  <LocationOnIcon fontSize="small" />
                  <Box component={"span"} sx={{ fontWeight: 400 }}>
                    {donor?.location}
                  </Box>
                </Typography>
                <Typography display={"flex"} alignItems={"center"} gap={1}>
                  {" "}
                  <FiberManualRecordIcon fontSize="small" />
                  <Box component={"span"} sx={{ fontWeight: 400 }}>
                    {donor?.availability === true ? "True" : "False"}
                  </Box>
                </Typography>
                {isAvailable &&
                <>
                  <Typography display={"flex"} alignItems={"center"} gap={1}>
                  {" "}
                  <EmailIcon fontSize="small" />
                  <Box component={"span"} sx={{ fontWeight: 400 }}>
                    {donor?.email}
                  </Box>
                </Typography>
                  
                </>
                }
              </Stack>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <PersonOutlineIcon
                sx={{
                  height: "150px",
                  width: "150px",
                  color: "primary.main",
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Box sx={{ marginY: 10 }}>
          <Container>
            <Box>
              <Typography
                variant="h4"
                textTransform={"capitalize"}
                fontWeight={500}
              >
                Contact {donor?.name}
              </Typography>
            </Box>
            <BBForm
              onSubmit={handleRequest}
              // resolver={zodResolver(validationSchema)}
              defaultValues={{
                phoneNumber:isAvailable?.phoneNumber|| "",
                hospitalName:isAvailable?.hospitalName|| "",
                hospitalAddress:isAvailable?.hospitalAddress|| "",
                reason: isAvailable?.reason||"",
                dateOfDonation: undefined,
              }}
            >
              <Grid container spacing={3} my={1} sx={{ width: "50%" }}>
                <Grid item xs={12}>
                  <BBInput
                    name="phoneNumber"
                    fullWidth
                    label="Phone Number"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <BBInput
                    name="hospitalName"
                    fullWidth
                    label="Hospital Name"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <BBInput
                    name="hospitalAddress"
                    fullWidth
                    label="Hospital Address"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <BBInput
                    name="reason"
                    fullWidth
                    label="Reason"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <BBDatePicker
                    name="dateOfDonation"
                    fullWidth
                    label="Date Of Donation"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Box></Box>

              <Box>
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <label>Agree to terms and conditions</label>
              </Box>
              <Button
                type="submit"
                disabled={!checked}
                sx={{
                  margin: "10px 0px",
                }}
              >
                Blood Request
              </Button>
            </BBForm>
          </Container>
        </Box>
      </Box>
    </Box>
 
  );
};

export default DonorDetailsPage;
