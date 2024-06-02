"use server"

import { FieldValues } from "react-hook-form";
export const register = async (value: FieldValues) => {
 

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
        credentials: "include",
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Registration failed");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    
  }
};
