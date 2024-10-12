"use client";
import DashboardHeader from "@/components/dashboard/header/DashboardHeader";
import { useGetMyRequestQuery } from "@/redux/api/requestApi";
import { formatBloodType } from "@/types";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const MyBloodRequestPage = () => {
  const { data: myRequest, isLoading } = useGetMyRequestQuery({});

  const columns: GridColDef[] = [
    {
      field: "donorName",
      headerName: "Donor Name",
      flex: 1,
      renderCell: ({ row }) => row?.donorName,
    },
    {
      field: "blood",
      headerName: "Blood Type",
      flex: 1,
      renderCell: ({ row }) => {
        return formatBloodType(row?.blood);
      },
    },
    {
      field: "requestStatus",
      headerName: "Request Status",
      flex: 1,
      renderCell: ({ row }) => {
        return row?.requestStatus === "PENDDING" ? (
          <Box
            style={{
              color: "#ff9966",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            Pending
          </Box>
        ) : (
          <Box
            style={{
              color: "green",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            Success
          </Box>
        );
      },
    },
    {
      field: "email",
      headerName: "Donor Email",
      flex: 1,
      renderCell: ({ row }) => (row?.donorInfo ? row.donorInfo.email : "N/A"),
    },
    {
      field: "location",
      headerName: "Donor Location",
      flex: 1,
      renderCell: ({ row }) =>
        row?.donorInfo ? row.donorInfo.location : "N/A",
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box >
          <DashboardHeader
            title="Lifesaving Blood Requests"
            subTitle="View Your Blood Donation Appeals"
          />
          <Box mt={5}>
            <DataGrid
              rows={myRequest?.data ?? []}
              columns={columns}
              loading={isLoading}
              hideFooter
            />
          </Box>
        </Box>
      ) : (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Optional overlay
          zIndex: 10, // Make sure it's on top of other content
        }}
      >
        <CircularProgress />
      </Box>
      )}
    </Box>
  );
};

export default MyBloodRequestPage;
