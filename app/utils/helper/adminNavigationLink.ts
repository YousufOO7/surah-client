import { ComponentType } from "react";
import { IconType } from "react-icons/lib";
import { LuContact } from "react-icons/lu";

type Language = "en";

export interface INavigationLink {
  icon?: IconType | ComponentType<{ className?: string }>;
  label: Record<Language, string>;
  key: string;
  href?: string;
  subLinks?: INavigationLink[];
  subSubLinks?: INavigationLink[];
}

const admindashboardRootLinks: INavigationLink = {
  icon: LuContact,
  label: {
    en: "Settings",
  },
  key: "/surah-admin-portal/setting",
  href: "/surah-admin-portal/setting",
};





export const adminNavigationLinks: INavigationLink[] = [
  { ...admindashboardRootLinks },
];
