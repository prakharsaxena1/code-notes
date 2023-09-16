import React, { useState } from 'react';
import { Box, Stack, Paper, Button } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';
import FileDisplay from '../FileDisplayPage';
import { IScoreCard } from '../../Interfaces';

const ScoreCard: React.FC<IScoreCard> = ({ current, total }) => {
  return (
    <Box sx={{ position: 'absolute', top: 8, left: '1rem' }}>
      Completed: {current} / {total}
    </Box>
  );
};

const NotesDisplay = () => {
  const locationState = useLocation();
  const [displayPtr, setDisplayPtr] = useState(0);
  if (locationState.state === null) {
    return <Navigate to="/" />;
  }
  const { files } = locationState.state;
  return (
    <Box sx={{ height: 'calc( 100vh - 64px )', backgroundColor: '#FAF9F6' }}>
      <Paper sx={{ position: 'relative' }}>
        <ScoreCard current={displayPtr + 1} total={files.length} />
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ p: 1 }}
          spacing={2}
        >
          <Button
            variant="outlined"
            disabled={displayPtr === 0}
            onClick={() => setDisplayPtr((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            disabled={displayPtr === files.length - 1}
            onClick={() => setDisplayPtr((prev) => prev + 1)}
          >
            Next
          </Button>
        </Stack>
      </Paper>
      <FileDisplay file={files[displayPtr]} />
    </Box>
  );
};

export default NotesDisplay;
