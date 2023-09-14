import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import data from '../../data/output.json';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {data.content.map((mainFolders) => (
        <Box
          key={mainFolders.name}
          onClick={() =>
            navigate(mainFolders.name, { state: { folderData: mainFolders } })
          }
        >
          <Typography>{mainFolders.name}</Typography>
        </Box>
      ))}
    </>
  );
};

export default HomePage;
