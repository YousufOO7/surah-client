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
    en: "Job List",
  },
  key: "/quick-admin-portal/add-jobs",
  href: "/quick-admin-portal/add-jobs",
};

const applicationsListLink: INavigationLink = {
  icon: LuContact,
  label: {
    en: "Applications List",
  },
  key: "/quick-admin-portal/applications-list",
  href: "/quick-admin-portal/applications-list",
};




export const adminNavigationLinks: INavigationLink[] = [
  { ...admindashboardRootLinks },
  { ...applicationsListLink },
];
