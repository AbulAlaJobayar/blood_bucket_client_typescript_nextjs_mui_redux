"use client";
import BBForm from "@/components/Form/BBForm";
import BBSelectField from "@/components/Form/BBSelectField";
import { bloodGroup, district } from "@/types";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const SearchDonorsPage = () => {
  const searchParams = useSearchParams();
  const bloodType = searchParams.get("bloodType");
  const location = searchParams.get("location");
  const availability = searchParams.get("availability");
  const [blood, setBlood] = useState(bloodType || null);
  const [locations, setLocations] = useState(location || null);
  const [available, setAvailable] = useState(availability || null);
  console.log(blood, locations, available);
  const [donor, setDonor] = useState([]);
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    setBlood(data.bloodType);
    setLocations(data?.location);
    setAvailable(data.availability);
  };
  useEffect(() => {
    fetch(
      `https://blood-bucket-five.vercel.app/api/donor-list?bloodType=${blood}&location=${locations}&availability=${available}`
    )
      .then((response) => response.json())
      .then((data) => setDonor(data));
  }, [blood, locations, available]);
      console.log(donor) 
  return (
    <Box>
      <Box bgcolor={"#FCE0DF"} py={5}>
        <Container>
          <BBForm onSubmit={handleSubmit}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
              <BBSelectField
                items={Object.keys(bloodGroup)}
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
    </Box>
  );
};

export default SearchDonorsPage;
