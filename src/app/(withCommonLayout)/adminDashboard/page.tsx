"use client";

import { useGetAllUsersQuery } from "@/redux/api/donorApi";
import { useUpdateRequestStatesMutation } from "@/redux/api/requestApi";
import { formatBloodType } from "@/types";
import { Box, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "sonner";

const AdminDashboardPage = () => {
  const { data: getAllUsers, isLoading } = useGetAllUsersQuery({});
  const [updateRequestStates] = useUpdateRequestStatesMutation();
  console.log(getAllUsers);
  const handleStatusChanged = async ({
    id,
    status,
  }: {
    id: string;
    status: string;
  }) => {
    const payload = {
      id: id,
      status: status,
    };
    console.log(payload);
    try {
      const res = await updateRequestStates(payload).unwrap();
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
      field: "accountStatus",
      headerName: "Account Status",
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
      headerName: "change status",
      flex: 2,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Stack direction={"row"} spacing={2}>
            <button
              style={{
                background: "green",
                padding: "0 12px",
                textAlign: "center",
                color: "white",
                borderRadius: "5%",
                fontSize: "16px",
                fontWeight: "400",
              }}
              onClick={() =>
                handleStatusChanged({ id: row.id, status: "APPROVED" })
              }
            >
              Approved
            </button>
            <button
              style={{
                background: "red",
                padding: "0 12px",
                textAlign: "center",
                color: "white",
                borderRadius: "5%",
                fontSize: "16px",
                fontWeight: "400",
              }}
              onClick={() =>
                handleStatusChanged({ id: row.id, status: "REJECTED" })
              }
            >
              Rejected
            </button>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box my={5}>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={getAllUsers?.data ?? []}
            columns={columns}
            loading={isLoading}
            hideFooter
          />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default AdminDashboardPage;
