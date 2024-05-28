"use server";

import { FieldValues } from "react-hook-form";

import { setAccessToken } from "./setAccessToken";
export const userLogin = async (data: FieldValues) => {
  const res = await fetch("https://blood-bucket-five.vercel.app/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });
  const userInfo = await res.json();
  console.log(userInfo);
  if (userInfo.data.token) {
    setAccessToken(userInfo.data.token, { redirect: "/dashboard" });
    console.log(userInfo.data.token);
  }
  console.log(userInfo);
  return userInfo;
};
