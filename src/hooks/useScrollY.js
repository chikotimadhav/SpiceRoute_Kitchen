import { useState, useEffect } from "react";

/**
 * Returns the current window.scrollY value, updated on scroll.
 */
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return y;
}
