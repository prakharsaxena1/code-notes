export interface IfileType {
  id: string;
  isFolder: boolean;
  name: string;
  code: string;
  link: string | null;
  notes: string;
  tags: string[];
}

export interface IfolderType {
  id: string;
  isFolder: boolean;
  name: string;
  location: string;
  content: IfolderType[] | IfileType[];
}
