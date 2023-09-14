import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface ICodeDisplay {
  code: string;
}

const CodeDisplay: React.FC<ICodeDisplay> = ({ code }) => {
  return (
    <SyntaxHighlighter
      language="java"
      style={nightOwl}
      customStyle={{
        margin: '0',
        padding: '25px',
        width: '100%',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
