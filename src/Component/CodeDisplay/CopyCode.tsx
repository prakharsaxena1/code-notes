import { useState } from 'react';
import { Stack, Typography, Paper, Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ICodeProps } from '../../Interfaces';

const CopyCode: React.FC<ICodeProps> = ({ code }) => {
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
    <Button
      onClick={onClickAction}
      sx={{
        position: 'sticky',
        top: 10,
        left: '80%',
        p: 0,
      }}
    >
      <Stack
        component={Paper}
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ p: '4px' }}
      >
        {copy ? <DoneIcon /> : <ContentCopyIcon />}
        <Typography variant="body2">{text}</Typography>
      </Stack>
    </Button>
  );
};

export default CopyCode;
