import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import sessionOptions from "./session-options";
const getIronSessionHandler = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  return session;
};
export default getIronSessionHandler;
