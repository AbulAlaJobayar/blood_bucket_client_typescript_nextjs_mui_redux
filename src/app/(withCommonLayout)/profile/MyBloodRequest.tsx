"use client";
import { useGetMyRequestQuery } from "@/redux/api/requestApi";
import { formatBloodType } from "@/types";
import { Box } from "@mui/material";
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
        return row?.requestStatus;
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
    <Box sx={{my:5}}>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={myRequest?.data ?? []}
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

export default MyBloodRequestPage;
