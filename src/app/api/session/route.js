// import { NextResponse } from 'next/server'
import getIronSessionHandler from "@/utils/session";
export async function GET(request) {
  const session = await getIronSessionHandler();
  return Response.json({ sessionAuth: session.auth });
}

export async function POST(request) {
  const { accessToken, destroy } = await request.json();
  const session = await getIronSessionHandler();
  let message = "";
  try {
    if (destroy === true) {
      await session.destroy();
    } else {
      session.auth = {
        accessToken: accessToken,
      };
      await session.save();
    }
  } catch (error) {
    console.log("+==+==+==+==+==+==+", error?.message);
    message = error?.message;
  }

  return Response.json({ accessToken, destroy, message });
}
