import { FC, useState } from 'react';
import { Box, Stack, Typography, Paper, Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IfileType } from '../../Interfaces';
import CodeDisplay from '../../Component/CodeDisplay';

interface IFileDisplay {
  file: IfileType;
}

interface ICopyCode {
  code: string;
}

const CopyCode: React.FC<ICopyCode> = ({ code }) => {
  const [copy, setCopy] = useState(false);
  const onClickAction = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  const text = copy ? 'Copied' : 'Copy code';
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: 20,
        right: 40,
        backgroundColor: '#3a404d',
        color: '#fff',
        cursor: 'pointer',
        padding: '4px',
      }}
      component={Paper}
      direction="row"
      spacing={1}
      alignItems="center"
    >
      {copy ? <DoneIcon /> : <ContentCopyIcon />}
      <Typography variant="body2" onClick={onClickAction}>
        {text}
      </Typography>
    </Stack>
  );
};

const FileDisplay: FC<IFileDisplay> = ({ file }) => {
  const [editable, setEditable] = useState(false);
  return (
    <Stack direction="row">
      <Box
        sx={{
          position: 'relative',
          height: 'calc( 100vh - (64px + 48px) )',
          overflow: 'auto',
          width: '40vw',
          backgroundColor: '#3a404d',
          display: 'flex',
        }}
      >
        <CodeDisplay code={file.code} />
        <CopyCode code={file.code} />
      </Box>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{ p: 1, maxWidth: '60vw' }}
      >
        <Grid item>
          <Typography variant="h6" sx={{ fontStyle: 'italic' }} gutterBottom>
            Notes
          </Typography>
          <Paper sx={{ overflow: 'hidden' }}>
            <div
              style={{
                maxWidth: '60vw',
                height: '25vh',
                overflow: 'auto',
                backgroundColor: '#fffeee',
                padding: '1em',
                boxSizing: 'border-box',
                outline: 0,
              }}
              contentEditable={editable}
              onClick={() => setEditable(true)}
            >
              {file.notes}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Pariatur, quibusdam sunt at animi autem tempore rem eligendi
              dignissimos quasi dolore praesentium illo amet atque hic eius,
              error, doloribus ducimus voluptates?
            </div>
          </Paper>
        </Grid>
        {file.link !== null && (
          <Grid item>
            <Typography variant="h6" sx={{ fontStyle: 'italic' }} gutterBottom>
              Question
            </Typography>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};

export default FileDisplay;
