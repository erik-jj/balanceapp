import create from "zustand";

const initialState = {
  currentRegister: {},
  modalAdd: false,
  modalEdit: false,
  modalDelete: false,
};
const useModalRegister = create((set) => ({
  currentRegister: {},
  modalAdd: false,
  modalEdit: false,
  modalDelete: false,
  setModalAdd: (show) => set((state) => ({ state, modalAdd: show })),
  setModalEdit: (show) => set((state) => ({ state, modalEdit: show })),
  setModalDelete: (show) => set((state) => ({ state, modalDelete: show })),
  setCurrentRegister: (register) =>
    set((state) => ({ state, currentRegister: register })),
  resetModalRegister: () => set((state) => ({ initialState })),
}));
export default useModalRegister;
