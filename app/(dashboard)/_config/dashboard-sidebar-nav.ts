import {
  FileTextIcon,
  FrameIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  SendIcon,
  type LucideIcon,
} from "lucide-react";

export type NavSubItem = {
  title: string;
  url: string;
};

export type NavMainItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  items?: NavSubItem[];
};

export type NavSecondaryItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export type NavProjectItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export const navMain: NavMainItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Surat",
    url: "/surat",
    icon: FileTextIcon,
    items: [
      { title: "Surat Masuk", url: "/surat/masuk" },
      { title: "Surat Keluar", url: "/surat/keluar" },
      { title: "Arsip", url: "/surat/arsip" },
    ],
  },
];

export const navSecondary: NavSecondaryItem[] = [
  { title: "Support", url: "#", icon: LifeBuoyIcon },
  { title: "Feedback", url: "#", icon: SendIcon },
];

export const navProjects: NavProjectItem[] = [
  { title: "Design Engineering", url: "#", icon: FrameIcon },
];
