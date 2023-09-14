import { useState } from 'react';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import data from '../../data/Output.json';
import { IfileType, IfolderType } from '../../Interfaces';
import { urls } from '../../Constants';

interface IFolderProps {
  folderData: IfolderType;
}

export const AllCodeDisplay = () => {
  const locationState = useLocation();
  const { files } = locationState.state;
  return (
    <>
      {files.map((file: IfileType) => (
        <h3 key={file.id}>{file.name}</h3>
      ))}
    </>
  );
};

const Folder: React.FC<IFolderProps> = ({ folderData }) => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  if (folderData.isFolder) {
    return (
      <Box>
        <Box
          sx={{
            p: 1,
            marginBottom: '1rem',
            backgroundColor: '#eee',
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
          <span style={{ marginRight: '0.5rem' }}>📁</span>
          <span>{folderData.name}</span>
        </Box>
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

const CodeNotesPage = () => {
  return (
    <div>
      <Folder folderData={data as IfolderType} />
    </div>
  );
};

export default CodeNotesPage;
