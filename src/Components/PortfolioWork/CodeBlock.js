import React, { useState } from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// REACT ICONS
import { RiFileCopyLine } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <CopyToClipboard text={code} onCopy={handleCopy}>
        {copied ? (
          <IoCheckmarkDoneSharp
            style={{
              color: "white",
              position: "absolute",
              right: "1%",
              top: "8%",
            }}
          />
        ) : (
          <RiFileCopyLine
            style={{
              color: "white",
              position: "absolute",
              right: "1%",
              top: "8%",
            }}
          />
        )}
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default CodeBlock;
