export type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  role: string;
  href?: string;
};

export type Profile = {
  name: string;
  nameLabel: string;
  heroLeft: string;
  heroRight: string;
  mark: string;
  role: string;
  roleEn: string;
  summary: string;
  location: string;
  availableLabel: string;
  email: string;
  portrait: string;
  cv: string;
  sampleNotice: string;
  socials: { label: string; href: string }[];
  stats: { value: string; label: string }[];
  projects: Project[];
  education: { place: string; detail: string; years: string }[];
  skills: string[];
  journey: { id: string; years: string; title: string; org: string; detail: string }[];
  awards: { title: string; org: string; year: string }[];
  topics: string[];
};

export const profile: Profile = {
  name: "ลีโอ",
  nameLabel: "ชื่อเล่น",
  heroLeft: "พลพล",
  heroRight: "กำมะถัน",
  mark: "LEO",
  role: "นักออกแบบผลิตภัณฑ์ดิจิทัล",
  roleEn: "DIGITAL DESIGNER",
  summary:
    "ออกแบบเว็บและแอปให้เล่าเรื่องได้ในจอเดียว ใช้ง่าย และดูเป็นของแบรนด์นั้นจริง ๆ",
  location: "กรุงเทพฯ",
  availableLabel: "พร้อมร่วมงาน",
  email: "hello@example.com",
  portrait: "/portrait.png?v=2",
  cv: "/cv.pdf",
  sampleNotice:
    "เนื้อหาบนหน้านี้เป็นตัวอย่าง เปลี่ยนชื่อ รูป และประวัติได้ที่ไฟล์ src/content/profile.ts",
  socials: [
    { label: "อีเมล", href: "mailto:hello@example.com" },
    { label: "อินสตาแกรม", href: "https://example.com" },
  ],
  stats: [
    { value: "04", label: "ผลงานทั้งหมด" },
    { value: "12", label: "โปรเจกต์ที่ได้ทำ" },
    { value: "06", label: "แบรนด์ที่ร่วมงาน" },
  ],
  projects: [
    {
      id: "clinic",
      title: "คลินิกนัดหมายออนไลน์",
      year: "2025",
      category: "ออกแบบ",
      summary: "หน้าจองคิวที่คนไข้ทำจบได้โดยไม่ต้องโทรถามซ้ำ",
      role: "ออกแบบประสบการณ์และหน้าตาทั้งระบบ",
      href: "https://example.com",
    },
    {
      id: "cafe",
      title: "ร้านกาแฟย่านเก่า",
      year: "2024",
      category: "แบรนด์",
      summary: "เว็บร้านที่รวมเมนู เรื่องเมล็ดกาแฟ และแผนที่ไว้ในหน้าเดียว",
      role: "กำกับภาพและออกแบบเว็บ",
    },
    {
      id: "reader",
      title: "แอปบันทึกการอ่าน",
      year: "2024",
      category: "ออกแบบ",
      summary: "ให้คนจดหนังสือที่อ่านจบแล้วกลับมาเปิดต่อได้ในสามวินาที",
      role: "ออกแบบหน้าจอและทดสอบกับผู้อ่าน",
    },
    {
      id: "library",
      title: "รายงานการใช้ห้องสมุด",
      year: "2023",
      category: "วิจัย",
      summary: "สัมภาษณ์ผู้ใช้แล้วชี้จุดที่คนเลิกกลางทางให้ทีมแก้ได้ตรงจุด",
      role: "วิจัยผู้ใช้และเรียบเรียงข้อค้นพบ",
    },
  ],
  education: [
    {
      place: "มหาวิทยาลัยตัวอย่าง",
      detail: "ศิลปกรรมศาสตร์ สาขาออกแบบนิเทศศิลป์",
      years: "2018–2022",
    },
    {
      place: "คอร์สออกแบบผลิตภัณฑ์",
      detail: "ฝึกทำต้นแบบ ทดสอบ และส่งมอบกับทีมเล็ก",
      years: "2023",
    },
  ],
  skills: [
    "ออกแบบส่วนต่อประสาน",
    "วิจัยผู้ใช้",
    "ระบบตัวอักษร",
    "ต้นแบบที่คลิกได้",
    "HTML และ CSS",
    "การเล่าเรื่องแบรนด์",
  ],
  journey: [
    {
      id: "freelance",
      years: "2024–ปัจจุบัน",
      title: "นักออกแบบอิสระ",
      org: "สตูดิโอส่วนตัว",
      detail:
        "รับออกแบบเว็บและแอปให้ร้านค้าและทีมเล็ก ดูแลตั้งแต่โจทย์จนถึงหน้าที่พร้อมให้คนอื่นพัฒนาต่อ",
    },
    {
      id: "product",
      years: "2022–2024",
      title: "นักออกแบบผลิตภัณฑ์",
      org: "บริษัทตัวอย่าง",
      detail:
        "ทำหน้าบริการหลักของผลิตภัณฑ์ ทำงานกับนักพัฒนา และวัดว่าคนใช้ทางที่ออกแบบไว้จริงหรือไม่",
    },
    {
      id: "intern",
      years: "2021",
      title: "นักออกแบบฝึกงาน",
      org: "ทีมออกแบบตัวอย่าง",
      detail: "ช่วยทำต้นแบบหน้าเว็บ จัดระบบคอมโพเนนต์ และจดบันทึกจากการทดสอบผู้ใช้",
    },
  ],
  awards: [
    {
      title: "ผลงานคัดเลือก",
      org: "นิทรรศการออกแบบนักศึกษา",
      year: "2022",
    },
    {
      title: "รางวัลทีม",
      org: "โปรเจกต์บริการสาธารณะ",
      year: "2024",
    },
  ],
  topics: ["ออกแบบเว็บ", "ออกแบบแอป", "ที่ปรึกษาแบรนด์", "ร่วมงานอื่น"],
};
