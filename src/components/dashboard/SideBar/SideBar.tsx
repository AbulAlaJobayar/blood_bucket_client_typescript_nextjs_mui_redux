import { Box, List, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo/brandLogo.png";
import Image from "next/image";

import { getUserInfo } from "@/services/authService";
import { useEffect, useState } from "react";
import SideBarItems from "./SideBarItems";
import { drawerItems } from "@/utils/drawerItems";
import { userRole } from "@/types";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        py={1}
        mt={1}
      >
        
        <Typography variant="h6" component="h1">
         Blood Bucket
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as userRole).map((item, index) => (
          <SideBarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
