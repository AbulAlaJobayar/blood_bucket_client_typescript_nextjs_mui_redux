"use server";

import { FieldValues } from "react-hook-form";

export const register = async (value:FieldValues) => {

  const res = await fetch(
    `https://blood-bucket-five.vercel.app/api/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
      credentials: "include",
      cache:"no-cache"
    }
    // {
    //   method: "POST",
    //   body: ,
    //   cache:"no-cache"
    // }
  );
  const data = await res.json();
  return data;
};
