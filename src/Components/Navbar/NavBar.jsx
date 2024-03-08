import { FaPowerOff } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuBell } from "react-icons/lu";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="Nav__container">
        <h1>Job Portal​</h1>
        <section className="Nav__links">
          <div>Home</div>
          <div>About</div>
          <div>Job</div>
          <div>Contact</div>
        </section>
        <section className="Nav__profiles">
          <button>
            <FaPowerOff size="20" />
          </button>
          <div>
            <CgProfile size="22" />
          </div>
          <div>
            <LuBell size="22" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
