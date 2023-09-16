import React, { useEffect, useState } from 'react';
import { Box, Typography, Link, Paper } from '@mui/material';
import parse from 'html-react-parser';
import LaunchIcon from '@mui/icons-material/Launch';
import makeRequest, { getSlugFromURL } from '../../Component/DataFetch';
import Loader from '../../Component/Loader';
import { IQuestion } from '../../Interfaces';

const slugToText = (slug: string) => {
  const words = slug.split('-');
  const text = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return text;
};

const Question: React.FC<IQuestion> = ({ link }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (link) {
      setLoading(true);
      makeRequest(link)
        .then((codeData) => {
          setCode(codeData);
        })
        .catch(() => {
          setCode('<h1>Unable to fetch question</h1>');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [link]);
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Link
        sx={{ width: 'fit-content', display: 'flex', alignItems: 'center' }}
        href={link}
        underline="none"
        color="inherit"
        target="_blank"
      >
        <Typography variant="h6" sx={{ fontStyle: 'italic', marginRight: 2 }}>
          {slugToText(getSlugFromURL(link))}
        </Typography>
        <LaunchIcon />
      </Link>
      <div style={{ position: 'relative', height: '75vh' }}>
        {loading ? (
          <Loader />
        ) : (
          <Paper
            sx={{
              p: 1,
              overflow: 'auto',
              height: '100%',
              backgroundColor: '	#ECF0F1',
            }}
          >
            <div>{parse(code)}</div>
          </Paper>
        )}
      </div>
    </Box>
  );
};

export default Question;
