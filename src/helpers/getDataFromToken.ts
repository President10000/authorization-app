import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export function getDataFromToken(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || ""; // get token from cookies
    const data = Jwt.verify(token, process.env.JWT_SECRET || ""); // verify token
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
