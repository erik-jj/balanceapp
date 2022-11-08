import create from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  user: {
    id: 0,
    email: "",
    verified: false,
    username: "",
    createdAt: "",
  },
};

const useUserStore = create(
  persist(
    (set) => ({
      user: initialState,
      setUser: (data) => set((state) => ({ user: data })),
      removeUser: () => set((state) => ({ user: initialState })),
    }),
    {
      name: "user",
      getStorage: () => sessionStorage,
    }
  )
);

export default useUserStore;
