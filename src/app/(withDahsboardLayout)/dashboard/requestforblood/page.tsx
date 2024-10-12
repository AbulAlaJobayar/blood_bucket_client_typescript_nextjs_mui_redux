"use client";
import DashboardHeader from "@/components/dashboard/header/DashboardHeader";
import BBForm from "@/components/Form/BBForm";
import BBSelectField from "@/components/Form/BBSelectField";
import {
  useGetMyRequestQuery,
  useRequestToMeQuery,
  useUpdateRequestStatesMutation,
} from "@/redux/api/requestApi";
import { formatBloodType } from "@/types";
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "sonner";

const RequestToMePage = () => {
  const { data: requestToMe, isLoading } = useRequestToMeQuery({});
  const [updateRequestStates] = useUpdateRequestStatesMutation();

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
      field: "requesterName",
      headerName: "Requester Name",
      flex: 1,
      renderCell: ({ row }) => row?.requester?.name,
    },
    {
      field: "blood",
      headerName: "Blood Type",
      flex: 1,
      renderCell: ({ row }) => {
        return formatBloodType(row?.requester?.bloodType);
      },
    },
    {
      field: "requestStatus",
      headerName: "Request Status",
      flex: 1,
      renderCell: ({ row }) => {
        return row?.requestStatus==="REJECTED"?
        
        (
          <Box
            style={{
              color: "#ff9966",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
           Rejected
          </Box>
        ) : (
          <Box
            style={{
              color: "green",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            Approved
          </Box>
        )
      },
    },
    {
      field: "email",
      headerName: "Requester Email",
      flex: 1,
      renderCell: ({ row }) =>
        row?.requestStatus === "APPROVED" ? row?.requester?.email : "N/A",
    },
    {
      field: "phone",
      headerName: "Requester Phone Number",
      flex: 1,
      renderCell: ({ row }) =>
        row?.requestStatus === "APPROVED" ? row?.phoneNumber : "N/A",
    },
    {
      field: "location",
      headerName: "Requester Location",
      flex: 1,
      renderCell: ({ row }) =>
        row?.requestStatus === "APPROVED" ? row.requester.location : "N/A",
    },

    {
      field: "action",
      headerName: "change status",
      flex: 2,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
           <Select
               value={row?.requestStatus}
               onChange={(e) => handleStatusChanged({ id: row.id, status: e.target.value })}
            >
              <MenuItem value={"APPROVED"}>Approved</MenuItem>
               <MenuItem value={"REJECTED"}>Rejected</MenuItem>
           </Select>
         </Box>
        );
      },
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DashboardHeader
            title="Lifesaving Blood Requests"
            subTitle="View Your Blood Donation Appeals"
          />
          <Box mt={5}>
            <DataGrid
              rows={requestToMe?.data ?? []}
              columns={columns}
              loading={isLoading}
              hideFooter
            />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional overlay
            zIndex: 10, // Make sure it's on top of other content
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default RequestToMePage;
