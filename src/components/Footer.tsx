import { profile } from "../content/profile";
import { SafeLink } from "./SafeLink";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1400px] flex-row items-end justify-between gap-6 px-10 py-10">
        <div>
          <p className="font-display text-4xl tracking-[0.12em]">{profile.mark}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {profile.socials.map((item) => (
            <SafeLink key={item.label} href={item.href} className="text-sm text-mute">
              {item.label}
            </SafeLink>
          ))}
          <a href="#top" className="text-sm text-paper">
            กลับขึ้นบน
          </a>
        </div>
      </div>
    </footer>
  );
}
