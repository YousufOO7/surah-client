import { IconType } from "react-icons"; 
import { LuListOrdered } from "react-icons/lu";

export interface INavigationLinks {
  icon?: IconType; // Change from string to IconType
  label: string; // Simplify the label to a string
  key: string;
  href: string;
}

// Main navigation links
export const publicNavigationLinks: INavigationLinks[] = [

  {
    icon: LuListOrdered,
    label: "Expertises",
    key: "find-jobs",
    href: "/find-jobs",
  },
  {
    icon: LuListOrdered,
    label: "Work",
    key: "find-jobs",
    href: "/find-jobs",
  },
  {
    icon: LuListOrdered,
    label: "About",
    key: "find-jobs",
    href: "/find-jobs",
  },
  {
    icon: LuListOrdered,
    label: "Contact",
    key: "find-jobs",
    href: "/find-jobs",
  }
];
