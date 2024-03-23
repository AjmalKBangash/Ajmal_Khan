import { useLocation } from "react-router-dom";
import theconcept from "./theconcept";
import careercounselling from "./careercounselling";
function BlogPosts() {
  const location = useLocation();
  const data = location.state;
  function keepFirstTwoWords(sentence) {
    const words = sentence.split(" ");

    // Ensure there are at least two words
    if (words.length < 2) {
      return sentence.toLowerCase(); // Return the original sentence if it has less than two words
    }

    // Keep the first two words and discard the rest
    const newSentence = words.slice(0, 2).join("");

    return newSentence.toLowerCase();
  }
  let Component = keepFirstTwoWords(data);
  if (Component === "theconcept") {
    let Com = theconcept;
    return <Com />;
  } else if (Component === "careercounselling") {
    let Com = careercounselling;
    return <Com />;
  }
}

export default BlogPosts;
