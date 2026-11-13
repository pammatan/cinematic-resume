import { useEffect, useId, useRef, useState } from "react";
import { useScrollLock } from "../lib/scrollLock";

const links = [
  { href: "#top", id: "top", label: "หน้าแรก" },
  { href: "#work", id: "work", label: "ผลงาน" },
  { href: "#about", id: "about", label: "เกี่ยวกับ" },
  { href: "#journey", id: "journey", label: "เส้นทาง" },
  { href: "#contact", id: "contact", label: "ติดต่อ" },
];

export function Nav() {
  const [current, setCurrent] = useState("");
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useScrollLock(open);

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

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    menuRef.current?.querySelector("a")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <nav className="site-nav" aria-label="ส่วนของหน้า">
        <a href="#top" aria-label="หน้าแรก" className="grid h-8 w-8 place-items-center text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M12 3.2 3 11h2.2v8.2h5.1v-4.8h3.4v4.8h5.1V11H21L12 3.2Z" />
          </svg>
        </a>
        {links.slice(1).map((link) => (
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

      <button
        ref={buttonRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-bars" />
      </button>

      <div
        ref={menuRef}
        id={menuId}
        className="site-menu"
        hidden={!open}
        onClick={close}
      >
        <nav aria-label="ส่วนของหน้า" onClick={(event) => event.stopPropagation()}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={current === link.id ? "true" : undefined}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
