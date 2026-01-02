import { create } from "zustand";

interface AuthStore {
  authStatus: "loading" | "authenticated" | "anonymous";
  setStatus: (status: "loading" | "authenticated" | "anonymous") => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  authStatus: "anonymous",
  setStatus: (status) => set(() => ({ authStatus: status })),
}));

export default useAuthStore;
