// app/providers.tsx
"use client";

import { HeroUIProvider } from "@heroui/react";
import { useEffect } from "react";
import useStore from "./store/store";
import { theme as themeType } from "./store/store";
export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useStore.use.theme();
  const setTheme = useStore.use.setTheme();

  useEffect(() => {
    const localTheme = localStorage.getItem("local-theme") as themeType;

    setTheme(
      localTheme ||
        (window.matchMedia("(prefers-color-scheme:dark)").matches
          ? "dark"
          : "light")
    );
    window
      .matchMedia("(prefers-color-scheme:dark)")
      .addEventListener("change", (e) => {
        setTheme(e.matches ? "dark" : "light");
      });
  }, []);
  //localstorage has the theme,use the theme,otherwise use the
  return (
    <HeroUIProvider>
      {theme && <main className={theme!}>{children}</main>}
    </HeroUIProvider>
  );
}
