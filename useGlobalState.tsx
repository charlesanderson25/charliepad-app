import { create } from "zustand";

export const useGlobalState = create((set) => ({
  isLoading: false,
  setIsLoading(isLoading) {
    set({ isLoading });
  },
}));
