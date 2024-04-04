import axios from "axios";
import "../Home/Home.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DownloadPDF() {
  const [refPro, inViewPro] = useInView({
    threshold: 0.3, // Trigger animation when 30% of the element is in view
  });
  const downloadPDF = () => {
    axios({
      url: "portfolio/ajmal-khan-cv.pdf/",
      method: "GET",
      responseType: "blob", // important
    })
      .then((response) => {
        // Create a blob URL for the response
        const url = window.URL.createObjectURL(new Blob([response.data]));
        // Create a temporary link element
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "AJMAL-KHAN-CV.pdf");
        // Trigger the download
        document.body.appendChild(link);
        link.click();
        // Cleanup
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  };

  return (
    <motion.span
      className="two-btns-on-back-img"
      onClick={downloadPDF}
      ref={refPro}
      initial={{ x: -150, opacity: 0 }}
      animate={{ x: inViewPro ? 0 : -150, opacity: inViewPro ? 1 : 0 }}
      exit={{ x: -150, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      Download CV
    </motion.span>
  );
}

export default DownloadPDF;
