"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/brandLogo.png";
import { Stack } from "@mui/material";
import useUserInfo from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/action/logoutUser";
import { toast } from "sonner";

const Navbar = () => {
  const [nav, setNav] = React.useState<null | HTMLElement>(null);
  const [user, setUser] = React.useState<null | HTMLElement>(null);
  const userInfo = useUserInfo();
  const router = useRouter();
console.log(userInfo)
  const handleLogOut = () => {
    logoutUser(router);
    setUser(null)
    toast.success("LogOut Successfully")

  };
  const users = true;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNav(null);
  };

  const handleCloseUserMenu = () => {
    setUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              mr: 3,
              my: 1,
            }}
          >
            <Link href="/">
              <Image src={logo} alt="Blood-Bucket" height={100} width={100} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={nav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              // keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(nav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                flexGrow: 1,
              }}
            >
              {" "}
              <MenuItem>
                <Link href={"/"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/about"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/searchdonors"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Search Blood</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              mr: 3,
              my: 1,
            }}
          >
            <Link href="/">
              <Image src={logo} alt="Blood-Bucket" height={80} width={80} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              color={"#FFFF"}
            >
              <MenuItem>
                <Link href={"/"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/about"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/searchdonors"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Search Blood</Typography>
                </Link>
              </MenuItem>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userInfo ? (
                 <Avatar alt={userInfo?.name} src="" />
                ) : (
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={user}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(user)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                {" "}
                <Link href={"/dashboard"}>
                  <Typography textAlign="center" onClick={handleCloseUserMenu}>
                    Dashboard
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                {userInfo && (
                  <Link href={"/profile"} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {" "}
                {userInfo ?  <Link href={'/'} onClick={handleLogOut} >
                    {" "}
                    <Typography textAlign="center">Logout</Typography>
                  </Link>:(
                  <Link href={"/login"} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </Link>
                ) }
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
