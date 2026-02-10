import { prisma } from "@/modules/database/prisma/prisma";
import { APIResponse, User } from "../types/types";
import { NextRequest } from "next/server";
import { UserService } from "./userService";
class userController {
  // async getUsers() {
  //   const users = await prisma.user.findMany();
  //   return users;
  // }
  async createUser(data: User): Promise<APIResponse> {
    const userService = new UserService();
    const response = await userService.createUser(data);
    return response;
  }
}
export default userController;
