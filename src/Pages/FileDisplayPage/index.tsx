import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import CodeDisplay from '../../Component/CodeDisplay';
import Question from './Question';
import { IFileDisplay } from '../../Interfaces';
// import Note from './Note';

const FileDisplay: FC<IFileDisplay> = ({ file }) => {
  return (
    <Stack
      direction="row"
      sx={{
        width: '100vw',
        height: 'calc( 100vh - (64px + 53px) )',
      }}
    >
      <Box
        sx={{
          overflow: 'auto',
          minWidth: '650px',
          maxWidth: '40vw',
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
        {file.link !== null && <Question link={file.link} />}
        {/* <Note text={file.notes} /> */}
      </Stack>
    </Stack>
  );
};

export default FileDisplay;
