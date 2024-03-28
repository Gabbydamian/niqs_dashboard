import { LuUser2 } from "react-icons/lu";
// import { motion } from "framer-motion";
import "./nav.css";

const Nav = () => {
  return (
    <header className="sticky top-0 left-0 z-20 bg-white flex justify-between items-center shadow-lg px-[6rem] py-[20px] h-[75px]">
      <div className="logo flex items-center">
        <a href="#">
          <h1 className="font-[900] text-xl pt-2">Imperial Quantifiers</h1>
        </a>
      </div>
      <nav>
        <ul className="flex space-x-12">
          <li className="font-[600]">
            <a href="/" className="py-3">
              Events
            </a>
          </li>
          <li className="font-[600]">
            <a href="/students" className="py-3">
              Students
            </a>
          </li>
          <li className="font-[600]">
            <a href="/courses" className="py-3">
              Media
            </a>
          </li>
        </ul>
      </nav>
      <div id="nav-util">
        <a href="#" className="flex gap-[6px] items-center py-3">
          <LuUser2 className="text-xl icon" />{" "}
          <span className="font-[600]">My Profile</span>
        </a>
      </div>
    </header>
  );
};

export default Nav;
