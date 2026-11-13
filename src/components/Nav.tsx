import { useEffect, useState } from "react";

const links = [
  { href: "#work", id: "work", label: "ผลงาน" },
  { href: "#about", id: "about", label: "เกี่ยวกับ" },
  { href: "#journey", id: "journey", label: "เส้นทาง" },
  { href: "#contact", id: "contact", label: "ติดต่อ" },
];

export function Nav() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const nodes = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <nav
        className="pointer-events-auto absolute top-4 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-[#e10600] px-1.5 py-1 shadow-[0_0_22px_rgba(225,6,0,0.45)]"
        aria-label="ส่วนของหน้า"
      >
          <a href="#top" aria-label="หน้าแรก" className="grid h-8 w-8 place-items-center text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12 3.2 3 11h2.2v8.2h5.1v-4.8h3.4v4.8h5.1V11H21L12 3.2Z" />
            </svg>
          </a>
          {links.map((link) => (
            <span key={link.href} className="flex items-center">
              <span className="mx-1.5 h-3.5 w-px bg-white/75" aria-hidden="true" />
              <a
                href={link.href}
                aria-current={current === link.id ? "true" : undefined}
                className="px-2.5 py-1 text-[0.92rem] font-medium text-white"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
    </header>
  );
}
