import { createSelectorFunctions } from "auto-zustand-selectors-hook";
import { create, StateCreator } from "zustand";

type theme = "light" | "dark" | null;
type customerTheme = "light" | "dark" | "system";
interface themeState {
  theme: theme;
  setTheme: (theme: theme) => void;
}
const createThemeSlice: StateCreator<themeState> = (set) => ({
  theme: null,
  setTheme: (theme: theme) => set(() => ({ theme })),
});
const useBoundStore = create<themeState>(createThemeSlice);
const useStore = createSelectorFunctions(useBoundStore);

export default useStore;
export type { customerTheme, theme };
