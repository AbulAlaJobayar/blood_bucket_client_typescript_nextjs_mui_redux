import { setAccessToken } from "./setAccessToken";
import { FieldValues } from "react-hook-form";

export const userLogin = async (data: FieldValues) => {
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`);
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!res.ok) {
     return await res.json()
    }

    const userInfo = await res.json();

    if (userInfo.data.token) {
      setAccessToken(userInfo.data.token, { redirect: "/dashboard" });
    }
    
    return userInfo;
  } catch (error) {
    console.error("Error during user login:", error);
    throw error;
  }
};