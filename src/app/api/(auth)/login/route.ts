import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    /*
    * TODO: 
    * - sanitize userinput (?)
    * - check if creds is in db, get user info
    * - issue access and refresh token
    * - save refresh token in http only cookies
    * - return access token (containing user info)
    */
    return NextResponse.json({ // make a common interface for nextresponse with status and message
      // token: accessToken,
      message: "Login successful",
      status: 200,
    });

  } catch (e) {
    console.error(e);
    return NextResponse.json({
      status: 500,
    });
  }
};