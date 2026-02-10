import { Dispatch, SetStateAction } from "react";

export type User = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  complement: string;
  number: number;
  state: string;
};

export type LoginInputs = {
  email: string;
  password: string;
};

export type APIResponse = {
  error: boolean;
  message: string;
};
export type response = {
  data: APIResponse;
};

export type RegisterInputs = User & {
  confirmPassword: string;
};

export type UserContext = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};
