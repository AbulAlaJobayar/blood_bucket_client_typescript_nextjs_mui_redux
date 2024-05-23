import { getServerSession } from "next-auth";

export const socialAuthData = async () => {
  const session = await getServerSession();
  return session;
};
