const DESIGN = 1280;
const PHONE = 760;

export function fitDesktop() {
  const root = document.getElementById("root");
  if (!root) return;

  let frame = 0;

  const apply = () => {
    const viewport = document.documentElement.clientWidth;
    const fitting = viewport < PHONE;
    const scale = fitting ? viewport / DESIGN : 1;

    root.style.width = fitting ? `${DESIGN}px` : "";
    root.style.transformOrigin = "top left";
    root.style.transform = fitting ? `scale(${scale})` : "";
    root.style.position = fitting ? "absolute" : "";
    root.style.left = fitting ? "0" : "";
    root.style.top = fitting ? "0" : "";

    document.body.style.height = fitting ? `${root.scrollHeight * scale}px` : "";
  };

  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(apply);
  };

  schedule();
  window.addEventListener("resize", schedule);
  window.visualViewport?.addEventListener("resize", schedule);
  new ResizeObserver(schedule).observe(root);
  window.addEventListener("load", schedule);
}
