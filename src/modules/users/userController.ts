import { prisma } from "@/modules/database/prisma/prisma";
class userController {
  async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  }
}
export default userController;
