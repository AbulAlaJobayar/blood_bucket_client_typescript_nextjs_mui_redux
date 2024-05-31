"use client";
import BBForm from "@/components/Form/BBForm";
import BBSelectField from "@/components/Form/BBSelectField";
import {
  useGetMyRequestQuery,
  useRequestToMeQuery,
  useUpdateRequestStatesMutation,
} from "@/redux/api/requestApi";
import { formatBloodType } from "@/types";
import { Box, Button, MenuItem, Select, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "sonner";

const RequestToMePage = () => {
  const { data: requestToMe, isLoading } = useRequestToMeQuery({});
  const [updateRequestStates] = useUpdateRequestStatesMutation();

  const handleStatusChanged = async({
    id,
    status,
  }: {
    id: string;
    status: string;
  }) => {
    const payload={
      id:id,
      status:status
    }
    console.log(payload)
   try {
    const res=await updateRequestStates(payload).unwrap()
    console.log(res.data)
    if(res?.data?.id){
      toast.success("Status Changed Successfully")
    }
    else{
      toast.error("Status Changed Unsuccessful")
    }
   } catch (error) {
    console.log(error)
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
        return row?.requestStatus;
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
            rows={requestToMe?.data ?? []}
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

export default RequestToMePage;
