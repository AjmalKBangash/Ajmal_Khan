import "./Home.css";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Navbar />
      <div onClick={() => navigate("sign-up/")}>Salam</div>
    </div>
  );
}

export default Home;
