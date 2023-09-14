import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        <Typography
          variant="h4"
          component="p"
          sx={{ m: 'auto' }}
          onClick={() => navigate('/')}
        >
          Code Notes
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
