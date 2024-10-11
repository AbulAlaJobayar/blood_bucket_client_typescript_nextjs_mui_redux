import { DrawerItem, userRole } from "@/types";
// icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TryIcon from "@mui/icons-material/Try";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
import { USER_ROLE } from "@/constant/role";
export const drawerItems = (role: userRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];
  const defaultMenu = [
    {
      title: "Dashboard",
      path: `/`,
      icon: DashboardIcon,
    },
    {
      title: "My Blood Request",
      path: `mybloodrequests`,
      icon: TryIcon,
    },
    {
      title: "Request For Blood",
      path: `requestforblood`,
      icon: MedicalInformationIcon,
    },
    {
      title: "Profile",
      path: `profile`,
      icon: PersonOutlineIcon,
    },
    {
      title: "ChangePassword",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];
  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push({
        title: "Manage Users",
        path: `manage-users`,
        icon: CalendarMonthIcon,
      });
      break;
    default:
      break;
  }
  return [...roleMenus, ...defaultMenu];
};
