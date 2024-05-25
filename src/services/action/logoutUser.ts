import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removedUser } from "../authService";
import { deleteCookies } from "./deleteCookies";
import { authKey } from "@/constant/authKey";

export const logoutUser=(router:AppRouterInstance)=>{
        removedUser();
        deleteCookies([authKey,"refreshToken"])
        router.push("/")
        router.refresh();
}