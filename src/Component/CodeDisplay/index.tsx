import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyCode from './CopyCode';

interface ICodeDisplay {
  code: string;
}

const CodeDisplay: React.FC<ICodeDisplay> = ({ code }) => {
  return (
    <div>
      <SyntaxHighlighter
        language="java"
        style={nightOwl}
        customStyle={{
          margin: '0',
          padding: '25px',
        }}
        wrapLines
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
      <CopyCode code={code} />
    </div>
  );
};

export default CodeDisplay;
