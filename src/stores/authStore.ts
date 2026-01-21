import type User from "@/entities/User";
import { create } from "zustand";

interface AuthStore {
  authStatus: "loading" | "authenticated" | "anonymous";
  user?: User;
  setUser: (user: User) => void;
  setStatus: (status: "loading" | "authenticated" | "anonymous") => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  authStatus: "anonymous",
  setStatus: (status) => set(() => ({ authStatus: status })),
  setUser: (user) => set(() => ({ user: user })),
}));

export default useAuthStore;
