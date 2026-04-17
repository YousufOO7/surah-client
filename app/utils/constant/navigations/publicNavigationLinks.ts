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
    label: "Surah List",
    key: "surah-list",
    href: "/surah-list",
  },
  {
    icon: LuListOrdered,
    label: "Ayat",
    key: "ayat",
    href: "#",
  }
];
