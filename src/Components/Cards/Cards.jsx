import { FaMapLocationDot } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";
import { FaAirbnb } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";
import { FaSlack, FaSnapchat } from "react-icons/fa6";
import "./Cards.css";
const Cards = () => {
  return (
    <div>
      <section>
        <div className="Card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ border: "none", borderRadius: "8px" }}>
              <FaAirbnb size="50" color="red" />
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>Product Manager</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "600", color: "gray" }}>
                  <FaMapLocationDot color="black"/> Bangalore, India
                </div>
                <LuDot size="25" />
                <span
                  style={{
                    alignItems: "center",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  Airbnb
                </span>
              </div>
            </div>
          </div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque eum voluptas.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              suscipit. Iste, unde.
            </li>
          </ul>
          <button>Details</button>
        </div>
        <div className="Card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ border: "none", borderRadius: "8px" }}>
              <FcMindMap size="50" color="red" />
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>Data-analyst</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "600", color: "gray" }}>
                  <FaMapLocationDot  color="black"/> Bangalore, India
                </div>
                <LuDot size="25" />
                <span
                  style={{
                    alignItems: "center",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  Mind-map
                </span>
              </div>
            </div>
          </div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque eum voluptas.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              suscipit. Iste, unde.
            </li>
          </ul>
          <button>Details</button>
        </div>
        <div className="Card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ border: "none", borderRadius: "8px" }}>
              <FaSlack size="50" color="red" />
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>Fullstack Developer</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "600", color: "gray" }}>
                  <FaMapLocationDot  color="black"/> Bangalore, India
                </div>
                <LuDot size="25" />
                <span
                  style={{
                    alignItems: "center",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  Stack Home
                </span>
              </div>
            </div>
          </div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque eum voluptas.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              suscipit. Iste, unde.
            </li>
          </ul>
          <button>Details</button>
        </div>
        <div className="Card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ border: "none", borderRadius: "8px" }}>
              <FaSnapchat size="50" color="yellow" />
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>Java Developer</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ fontWeight: "600", color: "gray" }}>
                  <FaMapLocationDot  color="black"/> Bangalore, India
                </div>
                <LuDot size="25" />
                <span
                  style={{
                    alignItems: "center",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  Airbnb
                </span>
              </div>
            </div>
          </div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              atque eum voluptas.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              suscipit. Iste, unde.
            </li>
          </ul>
          <button>Details</button>
        </div>
      </section>
    </div>
  );
};

export default Cards;
