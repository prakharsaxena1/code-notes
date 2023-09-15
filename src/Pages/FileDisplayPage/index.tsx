import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import CodeDisplay from '../../Component/CodeDisplay';
import { IFileDisplay } from './fileDisplay.interface';
import Note from './Note';
import Question from './Question';

const FileDisplay: FC<IFileDisplay> = ({ file }) => {
  return (
    <Stack
      direction="row"
      sx={{ height: 'calc( 100vh - (64px + 48px) )', width: '100%' }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'auto',
          minWidth: '40vw',
          backgroundColor: 'rgb(1, 22, 39)',
        }}
      >
        <CodeDisplay code={file.code} />
      </Box>
      <Stack
        direction="column"
        spacing={2}
        sx={{ p: 1, maxWidth: '60vw', height: '100%', boxSizing: 'border-box' }}
      >
        <Note text={file.notes} />
        {file.link !== null && <Question link={file.link} />}
      </Stack>
    </Stack>
  );
};

export default FileDisplay;
