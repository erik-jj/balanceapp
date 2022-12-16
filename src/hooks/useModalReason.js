import create from "zustand";

const initialState = {
  currentReason: {},
  modalAdd: false,
  modalEdit: false,
  modalDelete: false,
};

const useModalReason = create((set) => ({
  currentReason: {},
  modalAdd: false,
  modalEdit: false,
  modalDelete: false,
  setModalAdd: (show) => set((state) => ({ state, modalAdd: show })),
  setModalEdit: (show) => set((state) => ({ state, modalEdit: show })),
  setModalDelete: (show) => set((state) => ({ state, modalDelete: show })),
  setCurrentReason: (reason) =>
    set((state) => ({ state, currentReason: reason })),
  resetModalReason: () => set((state) => ({ initialState })),
}));
export default useModalReason;
