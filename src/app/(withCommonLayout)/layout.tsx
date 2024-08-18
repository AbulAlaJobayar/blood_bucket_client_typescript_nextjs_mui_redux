
import Footer from "@/components/Shared/Footer/Footer";
import FooterBottom from "@/components/Shared/Footer/FooterBottom";
import Navbar from "@/components/Shared/Navbar.tsx/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";





const CommonLayout = ({children}:{children:ReactNode}) => {
  return (
    <>
    <Navbar/>
     <Box sx={{minHeight:'100Vh'}}> {children}</Box>
      <Footer/>
      <FooterBottom/>
    </>
  );
};

export default CommonLayout;
