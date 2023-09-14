import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IfileType, IfolderType } from '../../Interfaces';
import { urls } from '../../Constants';

interface IFolderProps {
  folderData: IfolderType;
}

const Folder: React.FC<IFolderProps> = ({ folderData }) => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(true);
  if (folderData.isFolder) {
    return (
      <Box>
        <Paper
          sx={{
            p: 1,
            marginBottom: '1rem',
            backgroundColor: '#eee',
            display: 'flex',
            alignItems: 'center',
            cursor: folderData.content[0].isFolder ? 'default' : 'pointer',
          }}
          onClick={() => {
            if (!folderData.content[0].isFolder) {
              navigate(urls.codeNotes, {
                state: {
                  files: folderData.content as IfileType[],
                },
              });
            }
            setExpand(!expand);
          }}
        >
          <img src="./folderIcon.svg" alt="folder" width={35} />
          <Typography variant="body1" sx={{ marginLeft: 1, fontWeight: 600 }}>
            {folderData.name}
          </Typography>
        </Paper>
        <div style={{ display: expand ? 'block' : 'none', marginLeft: '1rem' }}>
          {folderData.content.map((exp: any) => (
            <Folder folderData={exp} key={exp.id} />
          ))}
        </div>
      </Box>
    );
  }
  return null;
};

export default Folder;
