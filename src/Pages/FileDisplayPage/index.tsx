import { FC } from "react";
import { Box } from "@mui/material";
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IfileType {
  id: string;
  isFolder: boolean;
  name: string;
  code: string;
  link: string | null;
  notes: string;
  tags: string[];
}

interface IFileDisplay {
  file: IfileType
}

const FileDisplay: FC<IFileDisplay> = ({ file }) => {
  return (
    <Box>
      <Box
        sx={{
          maxHeight: '80vh',
          overflow: 'auto',
          width: '50vw',
        }}
      >
        <SyntaxHighlighter
          language="java"
          style={nightOwl}
          customStyle={{
            padding: '2rem',
            margin: '0',
            height: '100%',
          }}
        >
          {file.code}
        </SyntaxHighlighter>
      </Box>
      {/* Notes */}
      <Box>
        <textarea name="notes" id={file.id} value={file.notes}></textarea>
      </Box>
    </Box>
  );
};

export default FileDisplay;