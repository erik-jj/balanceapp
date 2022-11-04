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
  token: "",
};

const useAuthStore = create(
  persist(
    (set) => ({
      auth: initialState,
      setAuth: (data) => set((state) => ({ auth: data })),
      removeAuth: () => set((state) => (state.auth = initialState)),
    }),
    {
      name: "user",
      getStorage: () => sessionStorage,
    }
  )
);

export default useAuthStore;
