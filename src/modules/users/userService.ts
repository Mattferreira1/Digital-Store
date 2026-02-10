import { prisma } from "../database/prisma/prisma";
import { APIResponse, User } from "../types/types";
import bcrypt from "bcrypt";
export class UserService {
  async createUser(data: User): Promise<APIResponse> {
    const emailIsValid = this.validateEmail(data.email);
    const emailExists = await this.checkIfUserExists(data.email);
    if (!emailIsValid || emailExists) {
      return { error: true, message: "Email inválido ou já existe" };
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword,
          addresses: {
            create: {
              street: data.address,
              city: data.city,
              zipCode: data.zipCode,
              complement: data.complement ?? null,
              state: data.state,
              number: data.number.toString(),
            },
          },
          cart: {
            create: {},
          },
        },
        include: {
          addresses: true,
          cart: true,
        },
      });

      return { error: false, message: "Usuário criado com sucesso" };
    } catch (error) {
      return { error: true, message: "Erro ao criar usuário" };
    }
  }

  validateEmail(email: string) {
    if (!email.includes("@") || !email.includes(".")) {
      return false;
    }
    return true;
  }

  async checkIfUserExists(email: string) {
    const exists = await prisma.user.findFirst({ where: { email } });
    if (exists) {
      return true;
    }
    return false;
  }
}
