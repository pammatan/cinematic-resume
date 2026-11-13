import { useEffect, useState } from "react";
import { profile } from "../content/profile";
import { useMotionEnabled } from "../motion/MotionContext";

const dots = ["#ff2a1a", "#3ee0c5", "#7dff6b", "#ffe14a", "#ff6ad5", "#9b8cff", "#ff8a3d", "#ff2a1a", "#3ee0c5", "#ffe14a", "#7dff6b", "#ff6ad5"];

export function Boot() {
  const { enabled } = useMotionEnabled();
  const [phase, setPhase] = useState<"on" | "out" | "off">(enabled ? "on" : "off");

  useEffect(() => {
    if (!enabled) return;
    const fade = window.setTimeout(() => setPhase("out"), 1400);
    const done = window.setTimeout(() => setPhase("off"), 1900);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(done);
    };
  }, [enabled]);

  if (phase === "off") return null;

  return (
    <div className={phase === "out" ? "boot boot-out" : "boot"} role="status">
      <div className="boot-ring" aria-hidden="true">
        {dots.map((color, index) => (
          <span
            key={`${color}-${index}`}
            style={{
              background: color,
              transform: `rotate(${index * 30}deg) translateY(-2.1rem)`,
            }}
          />
        ))}
      </div>
      <p className="mt-8 text-[0.72rem] tracking-[0.28em] text-paper">กำลังเปิด {profile.mark}</p>
      <div className="boot-bar">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-white/25 text-[0.65rem]">
          {profile.mark.slice(0, 1)}
        </span>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="ml-auto">{profile.availableLabel}</span>
      </div>
    </div>
  );
}
