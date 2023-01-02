import create from "zustand";

const useModalPassword = create((set) => ({
  modalPassword: false,
  setModalPassword: (show) => set((state) => ({ state, modalPassword: show })),
}));
export default useModalPassword;
