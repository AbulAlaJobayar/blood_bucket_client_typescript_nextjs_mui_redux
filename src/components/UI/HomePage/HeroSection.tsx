"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import animationData from "@/assets/animation.json";
import Link from "next/link";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <Box bgcolor={"#FCE0DF"}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={"center"}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              fontWeight={700}
              my={3}
              component={motion.div}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{duration: 1 }}
            
            >
              Urgent Blood & Platelet Shortage Alert!
            </Typography>
            <Typography variant="h5" fontWeight={500}
            component={motion.div}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{delay: 0.5, duration: 1 }}
          >
              We face a critical need for donors right now. By donating blood by
              8/31, you&apos;ll be making a life-saving difference. Your
              generosity today can save lives tomorrow. Please step up and
              donate!
            </Typography>
            <Stack direction={"row"} gap={3} my={3}
            component={motion.div}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay:1,duration: 1 }}
            >
              <Link href={"/register"}>
                {" "}
                <Button> Join as a Donar</Button>
              </Link>
              <Link href={"/searchdonors"}>
                {" "}
                <Button variant="outlined">Search Donors</Button>
              </Link>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Lottie
              animationData={animationData}
              loop={true}
              style={{ width: 500, height: 500 }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;

// import React from "react";
// import { Box, Button, Typography, Container } from "@mui/material";
// // import { FaPlay } from "react-icons/fa";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       sx={{
//         width: "100%",
//         height: "100vh",

//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box
//           component={motion.div}
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           sx={{
//             // p: 4,
//             // color: "#fff",
//             maxWidth: "50%",
//             // backgroundColor: "rgba(0, 0, 0, 0.6)",
//             // borderRadius: 2,
//           }}
//         >
//           <Typography
//             variant="h3"
//             component="h1"
//             gutterBottom
//             sx={{ fontWeight: 600 }}
//           >
//             Urgent Blood & Platelet Shortage Alert!
//           </Typography>
//           <Typography variant="body1" sx={{ mt: 2 }}>
//             We face a critical need for donors right now. By donating blood by
//             8/31, you&apos;ll be making a life-saving difference. Your
//             generosity today can save lives tomorrow. Please step up and donate!
//           </Typography>
//           <Box
//             component={motion.div}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}
//           >
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{
//                 backgroundColor: "#64BCAE",
//                 color: "#fff",
//                 borderRadius: "50px",
//                 px: 3,
//                 py: 1.5,
//                 "&:hover": {
//                   backgroundColor: "transparent",
//                   color: "#64BCAE",
//                   borderColor: "#64BCAE",
//                 },
//               }}
//             >
//               Catalog
//             </Button>
//             {/* <Button
//               variant="outlined"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 1,
//                 backgroundColor: "#fff",
//                 color: "#000",
//                 borderRadius: "50px",
//                 px: 3,
//                 py: 1.5,
//                 "&:hover": {
//                   backgroundColor: "#f0f0f0",
//                 },
//               }}
//             > */}
//             {/* <FaPlay style={{ color: "#64BCAE", fontSize: "1.5rem" }} />
//               See video about collection
//             </Button> */}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;
