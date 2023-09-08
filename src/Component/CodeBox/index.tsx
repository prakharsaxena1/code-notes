import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBox = () => {
  const codeString = 'System.out.println("Hello World!!")';
  return (
    <SyntaxHighlighter language="java">
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBox;
