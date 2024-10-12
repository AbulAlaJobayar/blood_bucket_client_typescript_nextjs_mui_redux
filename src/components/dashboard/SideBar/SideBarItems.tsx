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
                borderRight: "3px solid #EB2C29",
                "& svg": { color: "#EB2C29" },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItem primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarItems;
