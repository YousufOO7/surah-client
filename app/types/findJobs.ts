export type JobTag =
  | "Design"
  | "Marketing"
  | "Business"
  | "Development"
  | "React"
  | "Product"
  | "Data"
  | "QA"
  | "Analytics";

export interface FindJob {
  _id: number;
  title: string;
  company: string;
  location: string;
  type: "Full Time" | "Part Time" | "Remote" | "Internship";
  description: string;
  tags: JobTag[];
  logo: string;
  category: string;
}