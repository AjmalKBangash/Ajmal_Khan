import "./CodeSnippet.css";
import { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
const CodeSnippet = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    // Assuming you have a reference to the parent element containing <pre> and <code> elements
    const parentElement = document.querySelector(".code-content");
    // Retrieve text content from <pre> element
    const preText = parentElement.querySelector("pre").textContent;

    navigator.clipboard.writeText(preText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset copied state after 1.5 seconds
  };
  return (
    <div className="code-snippet">
      <div className="code-content">
        {children}
        {copied ? (
          <IoCheckmarkDoneSharp className="copy-button" />
        ) : (
          <RiFileCopyLine className="copy-button" onClick={copyToClipboard} />
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;
