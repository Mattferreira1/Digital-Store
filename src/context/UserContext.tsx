"use client";
import { User, UserContext } from "@/modules/types/types";
import { createContext, ReactNode, useState } from "react";

export const userContext = createContext<UserContext | null>(null);
const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
