import { logoutUser } from "@/services/action/logoutUser";
import { isLoggedIn } from "@/services/authService";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const loggedInUser = isLoggedIn();
  const router = useRouter();
  const handleLogout = () => {
    logoutUser(router);
  };
  return (
    <>
      {loggedInUser ? (
        <Box component={"button"} onClick={handleLogout} color="error">
          LogOut
        </Box>
      ) : (
        <Link  href="/login">
          LogIn
        </Link>
      )}
    </>
  );
};

export default AuthButton;