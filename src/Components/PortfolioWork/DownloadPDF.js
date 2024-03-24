import axios from "axios";
import "../Home/Home.css";
import { motion } from "framer-motion";

function DownloadPDF() {
  const downloadPDF = () => {
    axios({
      url: "portfolio/ajmal-cv.pdf/",
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
      initial={{ x: -150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -150, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      Download CV
    </motion.span>
  );
}

export default DownloadPDF;
