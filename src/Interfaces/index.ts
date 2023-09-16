export interface IFileType {
  id: string;
  isFolder: boolean;
  name: string;
  code: string;
  link: string | null;
  notes: string;
  tags: string[];
}

export interface IFolderType {
  id: string;
  isFolder: boolean;
  name: string;
  location: string;
  content: IFolderType[] | IFileType[];
}

export interface IScoreCard {
  current: number;
  total: number;
}

export interface ICodeProps {
  code: string;
}

export interface IFolderProps {
  folderData: IFolderType;
}

export interface IFileDisplay {
  file: IFileType;
}

export interface IQuestion {
  link: string;
}
export interface INoteProps {
  text: string;
}
