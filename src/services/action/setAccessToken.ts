'use server'
import { redirect } from "next/navigation";
import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";

export const setAccessToken = (token: string, option?: any) => {
  cookies().set(authKey, token);
  if (option && option.redirect) {
    redirect(option.redirect);
  }
};
