import { profile } from "../content/profile";
import { SafeLink } from "./SafeLink";

const statIcons = ["folder", "calendar", "trophy"] as const;

function Icon({ name }: { name: string }) {
  if (name === "folder") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3.5 7.5h6l1.6 2H20.5v8.2a1.3 1.3 0 0 1-1.3 1.3H4.8a1.3 1.3 0 0 1-1.3-1.3V7.5Z" />
        <path d="M3.5 7.5V6.2A1.2 1.2 0 0 1 4.7 5h4.2l1.5 2" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 10h17M8 3.5v3M16 3.5v3" />
      </svg>
    );
  }
  if (name === "trophy") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 4h8v6.2a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H5.2A2.2 2.2 0 0 0 7.2 10M16 6h2.8A2.2 2.2 0 0 1 16.8 10M12 14.2V17M9 20h6M10 17h4" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M14.2 20v-7.1h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.4-1.4H17V4.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.5v2.8H11V20h3.2Z" />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M21 8.2a2.7 2.7 0 0 0-1.9-1.9C17.5 6 12 6 12 6s-5.5 0-7.1.3A2.7 2.7 0 0 0 3 8.2 28 28 0 0 0 2.7 12 28 28 0 0 0 3 15.8a2.7 2.7 0 0 0 1.9 1.9C6.5 18 12 18 12 18s5.5 0 7.1-.3a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .3-3.8 28 28 0 0 0-.3-3.8ZM10.5 14.8V9.2L15.4 12l-4.9 2.8Z" />
      </svg>
    );
  }
  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M14.2 3.5c.4 2.3 1.7 3.8 3.8 4.1v2.4c-1.3 0-2.5-.4-3.6-1.1v5.8a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.6a3.2 3.2 0 1 0 2.2 3V3.5h2.4Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const channels = [
  { name: "facebook", label: "เฟซบุ๊ก" },
  { name: "youtube", label: "ยูทูบ" },
  { name: "tiktok", label: "ติ๊กต็อก" },
  { name: "instagram", label: "อินสตาแกรม" },
];

export function Hero() {
  const instagram = profile.socials.find((item) => item.label.includes("อินสตาแกรม"))?.href ?? "#contact";

  return (
    <section id="top" className="hero">
      <div className="hero-shards" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-brand">
        <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
          <path d="M3 31 16 4h6L9 31H3Z" fill="#ff2a1a" />
          <path d="M15 31 26 6h7L22 31h-7Z" fill="#ff5a45" />
        </svg>
        <p>
          <strong>Portfolio</strong>
          <small>My Profile</small>
        </p>
      </div>

      <div className="hero-stage">
        <div className="hero-copy">
          <div>
            <p className="hero-kicker">ชื่อจริง</p>
            <h1 className="hero-name">
              <span className="hero-name-line">
                นาย{profile.heroLeft} {profile.heroRight}
                <span className="hero-chevrons" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </span>
            </h1>
            <p className="hero-kicker hero-kicker-next">{profile.nameLabel}</p>
            <p className="hero-real">{profile.name}</p>
            <p className="hero-role">
              <span>{profile.role}</span>
            </p>
            <blockquote className="hero-quote">
              <span aria-hidden="true">“</span>
              <p>{profile.summary}</p>
              <span aria-hidden="true">”</span>
            </blockquote>
            <a href="#work" className="hero-cta">
              ดูผลงาน
              <span aria-hidden="true">›</span>
            </a>
            <p className="hero-tag">
              <span>DREAM</span>
              <span>DESIGN</span>
              <span>CREATE</span>
            </p>
          </div>

          <div className="hero-socials">
            <div className="hero-social-row">
              {channels.map((channel) => (
                <SafeLink
                  key={channel.name}
                  href={channel.name === "instagram" ? instagram : "#contact"}
                  className="hero-social"
                  aria-label={channel.label}
                >
                  <Icon name={channel.name} />
                </SafeLink>
              ))}
            </div>
            <a href="#contact" className="hero-connect">
              <span className="hero-social" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-figure">
          <img
            src={profile.portrait}
            alt=""
            width={763}
            height={998}
            draggable={false}
            className="hero-person"
          />
        </div>

        <ul className="hero-stats">
          {profile.stats.map((stat, index) => (
            <li key={stat.label} className="hero-stat-card">
              <span className="hero-stat-icon">
                <Icon name={statIcons[index] ?? "folder"} />
              </span>
              <span>
                <p className="hero-stat">{stat.value}</p>
                <p className="hero-stat-label">{stat.label}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
