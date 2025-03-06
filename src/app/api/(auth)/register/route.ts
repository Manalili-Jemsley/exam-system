import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    /*
    * TODO: 
    * check if username already exists
    * hash password
    * save creds to db
    */
    return NextResponse.json({
      message: "Registration successful",
      status: 201,
    });

  } catch (e) {
    console.error(e);
    return NextResponse.json({
      status: 500,
    });
  }
};