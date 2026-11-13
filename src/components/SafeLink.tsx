import type { ReactNode } from "react";

type SafeLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  download?: boolean;
  "aria-label"?: string;
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function SafeLink({ href, className, children, download = false, "aria-label": ariaLabel }: SafeLinkProps) {
  const external = isExternal(href);

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...(download ? { download: "cv.pdf" } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
