import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import materialOceanic from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import RemarkMathPlugin from "remark-math";
import remark2rehype from "remark-rehype";
import CodeCopyBtn from "../codeCopyBtn";
import style from "./style";

export const MarkDownReactCode = ({ description }) => {

  // Pre component for code blocks with a copy button
  const Pre = ({ children }) => (
    <pre style={style.codeBlock}>
      <CodeCopyBtn>{children}</CodeCopyBtn>
      {children}
    </pre>
  );

  return (
    <Box sx={style.detailsComment}>
      <ReactMarkdown
        remarkPlugins={[RemarkMathPlugin, remarkGfm]}
        rehypePlugins={[rehypeKatex, remark2rehype]}
        components={{
          table: ({ node, ...props }) => <Table sx={style.markdownTable} {...props} />,
          thead: TableHead,
          tbody: TableBody,
          tr: TableRow,
          th: TableCell,
          td: TableCell,
          li: ({ node, ...props }) => <li style={style.listItem} {...props} />,
          p: ({ node, ...props }) => <p style={style.paragraph} {...props} />,
          img: ({ node, ...props }) => (
            <img style={style.image} {...props} />
          ),
          pre: Pre,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={materialOceanic}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          a: ({ node, ...props }) => (
            <a style={{ color: "green" }} {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {description}
      </ReactMarkdown>
    </Box>
  );
};
