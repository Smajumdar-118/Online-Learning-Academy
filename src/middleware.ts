import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Check if the "token" cookie is set
  const token = req.cookies.get("token")?.value;

  // Add a custom header to indicate authentication status
  const response = NextResponse.next();
  if (token) {
    response.headers.set("x-user-authenticated", "true");
  } else {
    response.headers.set("x-user-authenticated", "false");
  }

  return response;
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
