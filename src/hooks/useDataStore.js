import create from "zustand";
import { getReasons } from "../services/api/reasons";
import { getDashboardData } from "../services/api/registers";

const initialState = {
  reasons: [],
  currentMonthRegisters: [],
  cardsInfo: [],
  errorMessage: "",
};

const useDataStore = create((set) => ({
  reasons: [],
  currentMonthRegisters: [],
  cardsInfo: [],
  errorMessage: "",
  fetchCurrentMonthRegisters: async (token) => {
    getDashboardData(token)
      .then((data) => {
        set((state) => ({ state, currentMonthRegisters: data.graph }));
        set((state) => ({ state, cardsInfo: data.cards }));
      })
      .catch((error) => {
        set((state) => ({ state, errorMessage: "Ha ocurrido un error" }));
      });
  },
  fetchReasons: async (token) => {
    getReasons(token)
      .then((data) => {
        const sortData = data.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        set((state) => ({ state, reasons: sortData }));
      })
      .catch((error) => {
        set((state) => ({ state, errorMessage: "Ha ocurrido un error" }));
      });
  },
  resetData: () => set((state) => ({initialState })),
}));
export default useDataStore;
