import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
export const providersData = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
