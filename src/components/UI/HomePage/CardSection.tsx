"use client"
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import doctor from "@/assets/doctor.webp";
import laptop from "@/assets/laptop.webp";
import women from "@/assets/woomen.webp";
import Link from "next/link";
import { motion } from "framer-motion";
const CardSection=()=> {
  const cardData = [
    {
      image: laptop,
      title: "Start Your RapidPass",
      description:
        "Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location.",
    },
    {
      image: doctor,
      title: "Am I Eligible to Donate",
      description:
        "Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications and more.",
    },
    {
      image: women,
      title: "Help Sickle Cell Patients",
      description:
        "Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need.",
    },
  ];
  return (
    <Box pt={5}>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {cardData?.map(({ image, title, description }, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <Card sx={{ padding: 2 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={image.src}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    fontWeight={700}
                    component={motion.div}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 1 }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ color: "black" }}
                    component={motion.p}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={"/about"}>
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}

          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default  CardSection
