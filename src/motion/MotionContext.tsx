import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MotionContextValue = {
  enabled: boolean;
  toggle: () => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);

function systemAllowsMotion() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(systemAllowsMotion);

  useLayoutEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
  }, [enabled]);

  const value = useMemo(
    () => ({
      enabled,
      toggle: () => setEnabled((current) => !current),
    }),
    [enabled],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotionEnabled() {
  const value = useContext(MotionContext);
  if (!value) throw new Error("MotionProvider ไม่อยู่ในต้นไม้ของหน้า");
  return value;
}
