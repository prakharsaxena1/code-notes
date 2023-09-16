import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ICodeProps } from '../../Interfaces';
import CopyCode from './CopyCode';

const CodeDisplay: React.FC<ICodeProps> = ({ code }) => {
  return (
    <div style={{ position: 'relative' }}>
      <CopyCode code={code} />
      <SyntaxHighlighter
        language="java"
        style={nightOwl}
        customStyle={{
          margin: '0',
          padding: '25px',
          paddingTop: 0,
        }}
        wrapLines
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
