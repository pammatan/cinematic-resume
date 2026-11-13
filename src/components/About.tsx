import { profile } from "../content/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1.1fr_0.9fr] gap-14 px-10">
        <Reveal>
          <SectionHeading eyebrow="เกี่ยวกับ" title="THE PERSON" />
          <p className="mt-8 max-w-xl text-3xl leading-snug">
            ฉันคือ {profile.name} จาก {profile.location} ทำงานระหว่างการออกแบบกับการเล่าเรื่อง
            เพื่อให้ของที่ทำแล้วคนใช้ต่อได้จริง
          </p>
        </Reveal>

        <div className="grid gap-12">
          <Reveal delay={0.08}>
            <h3 className="text-[0.72rem] tracking-[0.2em] text-mute">การศึกษา</h3>
            <ul className="mt-4 border-t border-line">
              {profile.education.map((item) => (
                <li key={item.place} className="border-b border-line py-4">
                  <p className="text-lg">{item.place}</p>
                  <p className="mt-1 text-sm text-mute">{item.detail}</p>
                  <p className="mt-2 text-[0.72rem] tracking-[0.14em] text-signal">{item.years}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="text-[0.72rem] tracking-[0.2em] text-mute">ทักษะ</h3>
            <ul className="mt-4 border-t border-line">
              {profile.skills.map((skill) => (
                <li key={skill} className="border-b border-line py-3 text-base">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
