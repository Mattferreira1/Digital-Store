import { APIResponse } from "@/modules/types/types";
import userController from "@/modules/users/userController";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const UserController = new userController();
// export async function GET(request: Request, res: NextResponse) {
//   const users = await UserController.getUsers();
//   console.log(users);

//   return NextResponse.json(users);
// }

export async function POST(req: Request, res: NextResponse ) {
  
  const body = await req.json();
  // console.log("body:",body);
  
  const response: APIResponse = await UserController.createUser(body);
  return NextResponse.json(response);
}