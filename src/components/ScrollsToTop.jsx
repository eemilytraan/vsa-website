import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on every route change *before paint* to avoid flicker.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // Don't interfere with in-page anchors like /page#section
    if (hash) return;

    // Do it immediately, and once more on the very next frame (belt & suspenders)
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
