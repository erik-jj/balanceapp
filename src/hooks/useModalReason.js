import create from "zustand";

const useModalReason = create((set) => ({
  currentReason: {},
  modalAdd: false,
  modalEdit: false,
  modalDelete: false,
  setModalAdd: (show) => set((state) => ({ state, modalAdd: show })),
  setModalEdit: (show) => set((state) => ({ state, modalEdit: show })),
  setModalDelete: (show) => set((state) => ({ state, modalDelete: show })),
  setCurrentReason: (reason) => set((state) => ({ state, currentReason: reason })),

}));
export default useModalReason;
