import { profile } from "../content/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Awards() {
  if (profile.awards.length === 0) return null;

  return (
    <section id="awards" className="scroll-mt-24 border-t border-line py-16 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <SectionHeading eyebrow="รางวัล" title="RECOGNITION" />
        </Reveal>
        <ol className="mt-10 border-t border-line">
          {profile.awards.map((award, index) => (
            <li
              key={`${award.title}-${award.year}`}
              className="grid gap-1 border-b border-line py-5 md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-8 md:py-6"
            >
              <span className="font-display text-3xl text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-2xl">{award.title}</span>
                <span className="mt-1 block text-sm text-mute">{award.org}</span>
              </span>
              <span className="text-sm tracking-[0.14em] text-mute">{award.year}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
