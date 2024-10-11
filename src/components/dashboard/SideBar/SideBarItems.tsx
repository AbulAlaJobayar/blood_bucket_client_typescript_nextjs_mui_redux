import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
type TProps = {
  item: DrawerItem;
};


import { usePathname } from "next/navigation";
import { DrawerItem } from "@/types";
const SideBarItems = ({ item }: TProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderRight: "3px solid #1584FD",
                "& svg": { color: "#1584FD" },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarItems;
