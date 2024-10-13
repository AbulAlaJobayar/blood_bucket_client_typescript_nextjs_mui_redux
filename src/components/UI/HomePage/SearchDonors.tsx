"use client";

import BBForm from "@/components/Form/BBForm";
import BBSelectField from "@/components/Form/BBSelectField";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { bloodGroupsType, district } from "@/types";
import { useRouter } from "next/navigation";

const SearchDonors = () => {
  const router = useRouter();
  const handleSubmit = (data: FieldValues) => {
    const queryString = new URLSearchParams(data).toString();
    router.push(`/searchdonors?${queryString}`);
  };
  return (
    <Box my={5} py={10} >
      <Container>
        <Stack direction={"column"} spacing={2} my={5}>
          <Typography variant="h4" fontWeight={700}>
            Search Donors
          </Typography>
          <Typography component={"p"} fontWeight={500} width={1 / 3}>
            {" "}
            Utilize our search feature to find compatible blood donors in your
            area. Quickly connect with generous individuals ready to make a
            difference in your time of need.
          </Typography>
        </Stack>

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
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 50,
              }}
            >
              Search
            </Button>
          </Stack>
        </BBForm>
      </Container>
    </Box>
  );
};

export default SearchDonors;
