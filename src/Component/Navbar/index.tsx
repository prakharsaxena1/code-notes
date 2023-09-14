import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../Constants';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      enableColorOnDark
      position="relative"
      component="nav"
      style={{
        boxShadow: 'none',
      }}
    >
      <Toolbar disableGutters>
        <Stack
          sx={{ width: '100%', px: 4 }}
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h4" component="p">
            Code Notes
          </Typography>
          <Box id="menu-box">
            <IconButton onClick={() => navigate(urls.base)}>
              <AutoStoriesIcon />
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
