import userController from "@/modules/users/userController";
import { NextResponse } from "next/server";

const UserController = new userController();
export async function GET(request: Request, res: NextResponse) {
  const users = await UserController.getUsers();
  console.log(users);

  return NextResponse.json(users);
}
