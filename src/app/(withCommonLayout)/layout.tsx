
import Navbar from "@/components/Shared/Navbar.tsx/Navbar";
import { ReactNode } from "react";




const CommonLayout = ({children}:{children:ReactNode}) => {
  return (
    <>
    <Navbar/>
      {children}
    </>
  );
};

export default CommonLayout;
