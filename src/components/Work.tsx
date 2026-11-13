import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { profile, type Project } from "../content/profile";
import { useScrollLock } from "../lib/scrollLock";
import { Reveal } from "./Reveal";
import { SafeLink } from "./SafeLink";
import { SectionHeading } from "./SectionHeading";

const categories = ["ทั้งหมด", ...new Set(profile.projects.map((item) => item.category))];

export function Work() {
  const [category, setCategory] = useState("ทั้งหมด");
  const [selected, setSelected] = useState<Project | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const closeDialog = useCallback(() => setSelected(null), []);
  const visible =
    category === "ทั้งหมด"
      ? profile.projects
      : profile.projects.filter((item) => item.category === category);

  return (
    <section id="work" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-[1400px] px-10">
        <Reveal>
          <SectionHeading eyebrow="ผลงาน" title="SELECTED WORK" />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="กรองผลงาน">
          {categories.map((item) => {
            const pressed = item === category;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={pressed}
                onClick={() => setCategory(item)}
                className={
                  pressed
                    ? "bg-paper px-4 py-2 text-sm text-ink"
                    : "border border-line px-4 py-2 text-sm text-paper"
                }
              >
                {item}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-mute">ไม่มีผลงานในหมวดนี้</p>
        ) : (
          <ul className="mt-10 border-t border-line">
            {visible.map((project, index) => (
              <li key={project.id} className="border-b border-line">
                <button
                  type="button"
                  className="grid w-full grid-cols-[6rem_1fr_auto] items-end gap-8 py-8 text-left"
                  onClick={(event) => {
                    opener.current = event.currentTarget;
                    setSelected(project);
                  }}
                >
                  <span className="font-display text-4xl text-blood">
                    {String(index + 1).padStart(2, "0")}
                    <span className="mt-1 block text-[0.65rem] tracking-[0.14em] text-mute">{project.year}</span>
                  </span>
                  <span>
                    <span className="block text-[0.72rem] tracking-[0.16em] text-signal">
                      {project.category}
                    </span>
                    <span className="mt-2 block text-4xl leading-tight">
                      {project.title}
                    </span>
                  </span>
                  <span className="max-w-sm text-sm leading-relaxed text-mute">{project.summary}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selected
        ? createPortal(
            <ProjectDialog
              project={selected}
              titleId={titleId}
              onClose={closeDialog}
              returnFocus={opener.current}
            />,
            document.body,
          )
        : null}
    </section>
  );
}

function ProjectDialog({
  project,
  titleId,
  onClose,
  returnFocus,
}: {
  project: Project;
  titleId: string;
  onClose: () => void;
  returnFocus: HTMLElement | null;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useScrollLock(true);

  useEffect(() => {
    const main = document.getElementById("content");
    const header = document.querySelector("header");
    closeButton.current?.focus();
    main?.setAttribute("inert", "");
    header?.setAttribute("inert", "");

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel.current) return;
      const focusable = [
        ...panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      main?.removeAttribute("inert");
      header?.removeAttribute("inert");
      returnFocus?.focus();
    };
  }, [onClose, returnFocus]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="ปิดรายละเอียด" onClick={onClose} />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[85svh] w-full max-w-xl overflow-y-auto border border-line bg-ink-2 p-10"
      >
        <p className="text-[0.72rem] tracking-[0.16em] text-signal">
          {project.category} / {project.year}
        </p>
        <h3 id={titleId} className="mt-3 text-4xl leading-tight">
          {project.title}
        </h3>
        <p className="mt-6 leading-relaxed text-paper">{project.summary}</p>
        <p className="mt-4 text-sm leading-relaxed text-mute">{project.role}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.href ? (
            <SafeLink
              href={project.href}
              className="inline-flex items-center justify-center bg-blood px-5 py-3 text-[0.72rem] tracking-[0.18em] text-white"
            >
              ดูตัวอย่าง
            </SafeLink>
          ) : null}
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center border border-line px-5 py-3 text-[0.72rem] tracking-[0.18em]"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
}
