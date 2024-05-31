"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { useUpdateByAdminMutation } from "@/redux/api/authApi";
import { useGetAllUsersQuery } from "@/redux/api/donorApi";
import { useUpdateRequestStatesMutation } from "@/redux/api/requestApi";
import { formatBloodType } from "@/types";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

const AdminDashboardPage = () => {
  const userInfo = useUserInfo();
  console.log(userInfo.role);
  const { data: getAllUsers, isLoading } = useGetAllUsersQuery({});
  const [updateByAdmin] = useUpdateByAdminMutation();
  console.log(getAllUsers);
  const router = useRouter();
  const handleStatusChanged = async ({
    id,
    status,
  }: {
    id: string;
    status: any;
  }) => {
    const payload = {
      id: id,
      status: status,
    };
    console.log(payload);
    try {
      if (userInfo.role !== "admin") {
        toast.error("you are not authorized Admin");
        return 
      }
      const res = await updateByAdmin(payload).unwrap();
      console.log(res.data);
      if (res?.data?.id) {
        toast.success("Status Changed Successfully");
      } else {
        toast.error("Status Changed Unsuccessful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: ({ row }) => row?.name,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: ({ row }) => row?.email,
    },
    {
      field: "blood",
      headerName: "Blood ",
      flex: 1,
      renderCell: ({ row }) => {
        return formatBloodType(row?.bloodType);
      },
    },

    {
      field: "role",
      headerName: "User Role",
      flex: 1,
      renderCell: ({ row }) => row?.role,
    },
    {
      field: "changeAccountStatus",
      headerName: "User Account Status",
      flex: 1,
      renderCell: ({ row }) => row?.accountStatus,
    },
    {
      field: "location",
      headerName: " Location",
      flex: 1,
      renderCell: ({ row }) => row?.location,
    },

    {
      field: "action",
      headerName: "change Role",
      flex: 2,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Stack direction={"row"} spacing={2}>
            <Button
              sx={{
                backgroundColor: "green",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
              disabled={row?.role === "admin" ||row.id===userInfo.id}
              onClick={() =>
                handleStatusChanged({ id: row.id, status: { role: "admin" } })
              }
            >
              Admin
            </Button>
            <Button
              sx={{
                backgroundColor: "red",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
              disabled={row?.role === "user" || row.id===userInfo.id}
              onClick={() =>
                handleStatusChanged({ id: row.id, status: { role: "user" } })
              }
            >
              User
            </Button>
          </Stack>
        );
      },
    },
    {
      field: "accountStatus",
      headerName: "Account Status",
      flex: 2,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Stack direction={"row"} spacing={2}>
            <Button
              sx={{
                backgroundColor: "green",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
              disabled={row?.accountStatus === "activate" || row.id===userInfo.id}
              onClick={() =>
                handleStatusChanged({
                  id: row.id,
                  status: { accountStatus: "activate" },
                })
              }
            >
              Activate
            </Button>

            <Button
              sx={{
                backgroundColor: "red",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
              disabled={row?.accountStatus === "deActivate" ||row.id===userInfo.id}
              onClick={() =>
                handleStatusChanged({
                  id: row.id,
                  status: { accountStatus: "deActivate" },
                })
              }
            >
              Deactivate
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box>
      <Box
        bgcolor={"#FCE0DF"}
        sx={{ clipPath: "polygon(100% 0, 100% 100%, 28% 76%, 0 100%, 0 0)" }}
      >
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              Admin Dashboard
            </Typography>
            <Typography fontWeight={400}>
              Update And Maintain user Profile
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box my={5}>
          {!isLoading ? (
            <Box my={2}>
              <DataGrid
                rows={userInfo.role=="admin"?getAllUsers?.data ?? []: []}
                columns={columns}
                loading={isLoading}
                hideFooter
              />
            </Box>
          ) : (
            <h1>Loading.....</h1>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default AdminDashboardPage;
