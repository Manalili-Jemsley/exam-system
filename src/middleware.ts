import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const isLoggedIn = false;

export const config = {
  matcher: [
    "/dashboard",
  ],
};

export function middleware(request: NextRequest) {
  if (!isLoggedIn && request.nextUrl.pathname !== "/") 
    return NextResponse.redirect(new URL("/", request.url));
  
  return NextResponse.next();
}