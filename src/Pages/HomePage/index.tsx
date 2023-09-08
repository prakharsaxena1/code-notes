import data from '../../data/output.json'
import { Box, Typography } from '@mui/material';

const HomeMenu = () => {
  console.log(data);
  return (
    <>
      {data.content.map((mainFolders) => (
        <Box key={mainFolders.name}>
          <Typography>{mainFolders.name}</Typography>
        </Box>
      ))}
    </>
  )
}

export default HomeMenu;
