
import { Box, Container, Grid, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";


const AboutPage = () => {
  return (
    <Box>
      <Box
        bgcolor={"#FCE0DF"}
        sx={{ clipPath: "polygon(100% 0, 100% 100%, 28% 76%, 0 100%, 0 0)" }}
      >
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              About Us
            </Typography>
            <Typography fontWeight={400}>
              Know about Blood Bucket. What, how, and why.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={400} my={5}>
              Welcome to BloodBucket, your trusted partner in saving lives
              through blood donation. Our mission is to facilitate a seamless
              connection between generous blood donors and those in urgent need,
              creating a lifeline for countless individuals.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Our Mission
            </Typography>
            <Typography fontWeight={400}>
              At BloodBucket, we believe that every drop of blood counts and has
              the potential to save lives. Our mission is to provide a reliable
              and immediate connection between donors and recipients, ensuring
              that no one has to wait in critical moments.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Who We Are
            </Typography>
            <Typography fontWeight={400}>
              BloodBucket is an innovative, automated blood service designed to
              bridge the gap between blood donors and seekers. Leveraging the
              power of technology, we ensure that blood donations are easily
              accessible to those who need them the most. Our platform operates
              through an intuitive website, making the process of finding and
              donating blood quick and efficient.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              How It Works
            </Typography>
            <Box>
              <Typography fontWeight={400} sx={{ my: 2 }}>
                <span style={{ fontWeight: 700 }}>1. For Donors:</span> Register
                on our platform and provide your blood type and availability.
                When a matching recipient is in need, you’ll receive a
                notification to donate.
              </Typography>
              <Typography>
                <span style={{ fontWeight: 700 }}>2. For Seekers:</span> Search
                for available donors in your area through our website.
                BloodBucket quickly matches you with compatible donors to
                facilitate a prompt donation.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Why Choose BloodBucket?
            </Typography>
            <Box>
              <Typography fontWeight={400} sx={{ my: 2 }}>
                <span style={{ fontWeight: 700 }}>
                  1. Instant Connectivity:
                </span>{" "}
                Our automated system ensures rapid matching between donors and
                seekers, minimizing wait times. notification to donate.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <span style={{ fontWeight: 700 }}>
                  2. User-Friendly Platform:
                </span>{" "}
                Search for available donors in your area through our website.
                BloodBucket quickly matches you with compatible donors to
                facilitate a prompt donation.Our website is designed for ease of
                use, making it simple to register, search, and connect.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Join Us
            </Typography>
            <Typography fontWeight={400} >
              Whether you are a potential donor ready to give the gift of life
              or someone in need of a life-saving donation, BloodBucket is here
              to support you. Together, we can build a community where no one
              has to face the fear of not finding a match in times of crisis.
            </Typography>
          </Grid>
        </Grid>

        <Box>
          <Typography
            fontWeight={600}
            sx={{ color: "#FFFF",background: "#EB2C29", marginY: 8 ,paddingY:4, paddingX:2, textAlign:"center", borderRadius:1}}
           
          >
            Thank you for being a part of BloodBucket. Your generosity and
            support help us ensure that life-saving blood is always within
            reach.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
