import { useState } from "react";
import { profile } from "../content/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  const [openId, setOpenId] = useState(profile.journey[0]?.id ?? "");

  return (
    <section id="journey" className="scroll-mt-24 border-t border-line py-28">
      <div className="mx-auto max-w-[1400px] px-10">
        <Reveal>
          <SectionHeading eyebrow="เส้นทาง" title="THE PATH" />
        </Reveal>
        <div className="mt-10 border-t border-line">
          {profile.journey.map((item) => {
            const open = item.id === openId;
            const panelId = `journey-${item.id}`;
            return (
              <div key={item.id} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    className="grid w-full grid-cols-[10rem_1fr_auto] items-baseline gap-8 py-6 text-left"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? "" : item.id)}
                  >
                    <span className="text-[0.72rem] tracking-[0.14em] text-signal">{item.years}</span>
                    <span className="text-3xl">{item.title}</span>
                    <span className="text-sm text-mute">{item.org}</span>
                  </button>
                </h3>
                <p
                  id={panelId}
                  hidden={!open}
                  className="max-w-2xl pb-6 pl-[12rem] text-base leading-relaxed text-mute"
                >
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
