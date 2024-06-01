export interface Project {
  slug: string;
  name: string;
  description: string;
  image: string;
  page?: string;
  repository?: string;
  tags: string[];
}
