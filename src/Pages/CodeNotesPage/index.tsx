import { Box, Paper, Typography } from '@mui/material';
import data from '../../data/Output.json';
import { IfolderType } from '../../Interfaces';
import Folder from '../../Component/Folder';

const CodeNotesPage = () => {
  return (
    <Paper
      sx={{
        m: '3rem auto 0rem',
        width: '90vw',
        minHeight: '75vh',
        p: 2,
      }}
      elevation={10}
    >
      <Typography variant="h3" sx={{ m: 2, fontWeight: 700 }} align="center">
        Folders
      </Typography>
      <Box sx={{ p: '1rem 2rem' }}>
        <Folder folderData={data as IfolderType} />
      </Box>
    </Paper>
  );
};

export default CodeNotesPage;
