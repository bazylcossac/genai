"use client";
import { useEffect } from "react";

function useShortcutOpenInput(callback: () => void) {
  const system = navigator.userAgent.toLocaleLowerCase();
  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      const systemKey = system.includes("mac") ? e.metaKey : e.ctrlKey;

      if (systemKey && e.key === "k") {
        callback();
      }
    };

    window.addEventListener("keydown", keyDown);

    return () => window.removeEventListener("keydown", keyDown);
  }, [system, callback]);
}

export default useShortcutOpenInput;
