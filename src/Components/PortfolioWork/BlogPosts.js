import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Decouplingarchitecture from "./Decouplingarchitecture";
import Careercounselling from "./Careercounselling";
import Proxyservers from "./Proxyservers";
import Virtualizationandcontainerization from "./Virtualizationandcontainerization";
function BlogPosts() {
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [location.state]); // Scroll to top whenever location state changes

  function keepFirstTwoWords(sentence) {
    const words = sentence.split(" ");
    // Ensure there are at least two words
    if (words.length < 2) {
      return sentence.toLowerCase(); // Return the original sentence if it has less than two words
    }

    // Keep the first two words and discard the rest
    const newSentence = words.slice(0, 3).join("");

    return newSentence.toLowerCase();
  }
  let Component;
  if (location.state) {
    Component = keepFirstTwoWords(data);
    Component = Component.charAt(0).toUpperCase() + Component.slice(1);
  }
  if (Component === "Decouplingarchitecture") {
    let Com = Decouplingarchitecture;
    return <Com />;
  } else if (Component === "Careercounselling") {
    let Com = Careercounselling;
    return <Com />;
  } else if (Component === "Proxyservers") {
    let Com = Proxyservers;
    return <Com />;
  } else if (Component === "Virtualizationandcontainerization") {
    let Com = Virtualizationandcontainerization;
    return <Com />;
  }
}

export default BlogPosts;
