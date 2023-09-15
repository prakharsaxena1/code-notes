import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { INoteProps } from './fileDisplay.interface';

const Note: React.FC<INoteProps> = ({ text }) => {
  const [editable, setEditable] = useState(false);
  return (
    <Box>
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
          {text}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
          quibusdam sunt at animi autem tempore rem eligendi dignissimos quasi
          dolore praesentium illo amet atque hic eius, error, doloribus ducimus
          voluptates?
        </div>
      </Paper>
    </Box>
  );
};

export default Note;
