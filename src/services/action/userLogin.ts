// "use server"

// import { FieldValues } from "react-hook-form";

 import { setAccessToken } from "./setAccessToken";
// export const userLogin = async (data: FieldValues) => {
//   console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`)
  
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//     credentials: "include",
//   });
//   console.log(res)
//   const userInfo = await res.json();
//   console.log(userInfo.data.token);
//   if (userInfo.data.token) {
//     setAccessToken(userInfo.data.token, { redirect: "/profile" }); 
//   }
//   return userInfo;
// };
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
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const userInfo = await res.json();
    console.log(userInfo.data.token);

    if (userInfo.data.token) {
      setAccessToken(userInfo.data.token, { redirect: "/profile" });
    }
    
    return userInfo;
  } catch (error) {
    console.error("Error during user login:", error);
    throw error;
  }
};