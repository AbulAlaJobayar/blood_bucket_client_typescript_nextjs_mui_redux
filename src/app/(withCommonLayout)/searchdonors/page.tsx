"use client";
import BBForm from "@/components/Form/BBForm";
import BBSelectField from "@/components/Form/BBSelectField";
import { bloodGroupsType, district, formatBloodType } from "@/types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useGetDonorQuery } from "@/redux/api/donorApi";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";
interface IFormInput {
  bloodType: keyof typeof bloodGroupsType; // Ensure bloodGroup matches the keys of bloodGroupMapping
  location: string;
  availability: string;
}
const SearchDonorsPage = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { data: getDonor, isLoading } = useGetDonorQuery({ ...params, page });
  console.log(getDonor?.donors.meta);
  const total = getDonor?.donors?.meta?.total || 0;
  const limit = getDonor?.donors?.meta?.limit || 10;
  const totalPage = Math.ceil(total / limit);

  const handleSubmit = (data: IFormInput) => {
    const formattedData = {
      bloodType: bloodGroupsType[data.bloodType],
      location: data.location,
      availability: data.availability === "true",
    };
    setParams(formattedData);
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log(value);
    setPage(value);
  };
  if (isLoading) {
    return (
      <>
        <Container>
          <Grid container spacing={2} my={10}>
            {Array.from(new Array(10)).map((item, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
  return (
    <Box>
      <Box bgcolor={"#FCE0DF"} py={5}>
        <Container>
          <BBForm onSubmit={handleSubmit}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <BBSelectField
                items={Object.keys(bloodGroupsType)}
                name="bloodType"
                fullWidth
                label="BloodType"
                size="small"
              />
              <BBSelectField
                items={district}
                name="location"
                fullWidth
                label="Location"
                size="small"
              />

              <BBSelectField
                items={["true", "false"]}
                name="availability"
                fullWidth
                label="Availability"
                size="small"
              />
              <Button
                startIcon={<SearchIcon />}
                type="submit"
                fullWidth
                sx={{
                  paddingX: 1,
                  borderRadius: 1,
                }}
              >
                Search
              </Button>
            </Stack>
          </BBForm>
        </Container>
      </Box>
      <Box my={5}>
        <Container>
          <Grid container spacing={2}>
            {!isLoading &&
              getDonor?.donors?.data.map((donor: any) => (
                <Grid key={donor.id} item xs={12} md={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Stack spacing={2} direction={"row"}>
                        <Box sx={{ flex: 1 / 3 }}>
                          <PersonOutlineIcon
                            sx={{
                              height: "100px",
                              width: "100px",
                              color: "primary.main",
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography>
                            Name:
                            <Box
                              component={"span"}
                              ml={1}
                              fontWeight={600}
                              sx={{ textTransform: "capitalize" }}
                            >
                              {donor?.name}
                            </Box>{" "}
                          </Typography>
                          <Typography>
                            Blood Type:{" "}
                            <Box
                              component={"span"}
                              ml={1}
                              sx={{ textTransform: "capitalize" }}
                              fontWeight={600}
                            >
                              {formatBloodType(donor?.bloodType)}
                            </Box>
                          </Typography>
                          <Typography>
                            Location:{" "}
                            <Box
                              component={"span"}
                              ml={1}
                              sx={{ textTransform: "capitalize" }}
                              fontWeight={600}
                            >
                              {donor?.location}
                            </Box>{" "}
                          </Typography>
                          <Typography>
                            Availability:{" "}
                            {donor?.availability === true ? "True" : "False"}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                    <CardActions>
                     <Button  fullWidth> <Link href={`/searchdonors/${donor.id}`} >Show Details</Link></Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={totalPage}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchDonorsPage;
