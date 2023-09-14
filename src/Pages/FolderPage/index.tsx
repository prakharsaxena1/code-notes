import { Box, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import FileDisplay from '../FileDisplayPage';

function FolderPage() {
  const locationStateData = useLocation();
  const { content } = locationStateData.state.folderData;
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {content.map((file: any, i: number) => (
          <Grid item xs={12} key={i}>
            <FileDisplay file={file} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FolderPage;
