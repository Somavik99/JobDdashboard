import Cards from "../Cards/Cards";
import SideBar from "../SideBar/SideBar";
import { BsVectorPen } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaDatabase } from "react-icons/fa6";
import { RiMenuSearchLine } from "react-icons/ri";
import { GrLocationPin } from "react-icons/gr";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div>
      <div className="side__bar">
        <SideBar />
      </div>
      <div className="Search__bar">
        <div style={{ margin: "10px", alignItems: "center" }}>
          <GrLocationPin size="25" />
          <input type="text" placeholder="Location..." />
        </div>
        <div style={{ margin: "10px", alignItems: "center" }}>
          <PiSuitcaseSimpleBold size="25" />
          <input type="text" placeholder="Job or Company name..." />
        </div>
        <button>Search</button>
      </div>
      <div className="Cards__container">
        <h1>Popular Job</h1>
        <section className="Category__sect">
          <div className="Category__Card">
            <BsVectorPen size="25" />
            <p style={{ color: "green", fontSize: "20px", fontWeight: "600" }}>
              UI/UX Designer
            </p>
            <p style={{ color: "gray" }}>$300 - $1800</p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <p style={{ color: "gray" }}>5,000 Applied</p>
              <span>
                <IoMdStar color="orange" />
                4.9
              </span>
            </div>
          </div>
          <div className="Category__Card">
            <HiOutlineComputerDesktop size="25" />
            <p style={{ color: "green", fontSize: "20px", fontWeight: "600" }}>
              Web Developer
            </p>
            <p style={{ color: "gray" }}>$300 - $1800</p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <p style={{ color: "gray" }}>5,000 Applied</p>
              <span>
                <IoMdStar color="orange" />
                4.9
              </span>
            </div>
          </div>
          <div className="Category__Card">
            <RiMenuSearchLine size="25" />
            <p style={{ color: "green", fontSize: "20px", fontWeight: "600" }}>
              Researcher
            </p>
            <p style={{ color: "gray" }}>$300 - $1800</p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <p style={{ color: "gray" }}>5,000 Applied</p>
              <span>
                <IoMdStar color="orange" />
                4.9
              </span>
            </div>
          </div>
          <div className="Category__Card">
            <FaDatabase size="25" />
            <p style={{ color: "green", fontSize: "20px", fontWeight: "600" }}>
              Data Analyst
            </p>
            <p style={{ color: "gray" }}>$300 - $1800</p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <p style={{ color: "gray" }}>5,000 Applied</p>
              <span>
                <IoMdStar color="orange" />
                4.9
              </span>
            </div>
          </div>
        </section>
        <section className="Card__section">
          <h1 style={{fontSize:"28px"}}>Search Result</h1>
          <Cards />
        </section>
      </div>
    </div>
  );
};

export default DashBoard;
