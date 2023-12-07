import { NextResponse } from "next/server";
const GET = async (request: Request, context: any) => {
  const url = new URL(request.url);
  const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  const res = await fetch(`${API_URL}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return NextResponse.json(data);
};
export { GET };