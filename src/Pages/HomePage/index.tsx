import { useNavigate } from 'react-router-dom';
import data from '../../data/output.json'
import { Box, Typography } from '@mui/material';

const HomeMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      {data.content.map((mainFolders) => (
        <Box key={mainFolders.name} onClick={() => navigate(mainFolders.name, { state: { folderData: mainFolders } })}>
          <Typography>{mainFolders.name}</Typography>
        </Box>
      ))}
    </>
  )
}

export default HomeMenu;
