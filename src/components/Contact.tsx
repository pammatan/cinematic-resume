import { useState, type FormEvent } from "react";
import { profile } from "../content/profile";
import { cleanField } from "../lib/text";
import { Reveal } from "./Reveal";
import { SafeLink } from "./SafeLink";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [topic, setTopic] = useState(profile.topics[0] ?? "");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = cleanField(String(data.get("name") ?? ""), 80);
    const message = cleanField(String(data.get("message") ?? ""), 800);
    const chosen = profile.topics.includes(topic) ? topic : profile.topics[0];

    if (!name || !message || !chosen) {
      setStatus("");
      setError("ใส่ชื่อและรายละเอียดที่ไม่ว่างก่อน");
      return;
    }

    const subject = `คุยงาน — ${name}`;
    const body = [`ชื่อ: ${name}`, `หัวข้อ: ${chosen}`, "", message].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setError("");
    setStatus("เปิดร่างอีเมลบนเครื่องนี้แล้ว ถ้าไม่ขึ้น ให้เช็กว่าเครื่องมีแอปอีเมล");
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-16 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <SectionHeading eyebrow="ติดต่อ" title="LET'S TALK" />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-mute">
            มีงานที่อยากทำให้ชัดขึ้น ส่งชื่อและรายละเอียดมาได้ ฟอร์มนี้ไม่เก็บข้อความไว้ที่ไหน
            มันแค่เปิดร่างจดหมายบนเครื่องของคุณ
          </p>
          <ul className="mt-8 border-t border-line">
            <li className="border-b border-line py-4">
              <SafeLink href={`mailto:${profile.email}`} className="text-lg">
                {profile.email}
              </SafeLink>
            </li>
            {profile.socials
              .filter((item) => !item.href.startsWith("mailto:"))
              .map((item) => (
                <li key={item.label} className="border-b border-line py-4">
                  <SafeLink href={item.href} className="text-lg">
                    {item.label}
                  </SafeLink>
                </li>
              ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="border-t border-line" onSubmit={onSubmit}>
            <label className="block border-b border-line py-5" htmlFor="contact-name">
              <span className="text-[0.72rem] tracking-[0.16em] text-mute">ชื่อ</span>
              <input
                id="contact-name"
                name="name"
                required
                maxLength={80}
                autoComplete="name"
                className="mt-3 w-full bg-transparent text-xl outline-none"
              />
            </label>
            <label className="block border-b border-line py-5" htmlFor="contact-topic">
              <span className="text-[0.72rem] tracking-[0.16em] text-mute">หัวข้อ</span>
              <select
                id="contact-topic"
                name="topic"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className="mt-3 w-full bg-transparent text-xl outline-none"
              >
                {profile.topics.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="block border-b border-line py-5" htmlFor="contact-message">
              <span className="text-[0.72rem] tracking-[0.16em] text-mute">รายละเอียด</span>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={800}
                rows={5}
                className="mt-3 w-full resize-y bg-transparent text-xl outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center bg-blood px-5 py-3 text-[0.72rem] tracking-[0.18em] text-white"
            >
              เปิดร่างอีเมล
            </button>
            {error ? (
              <p className="mt-4 text-sm text-signal" role="alert">
                {error}
              </p>
            ) : null}
            <p className="mt-4 text-sm text-mute" role="status">
              {status}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
