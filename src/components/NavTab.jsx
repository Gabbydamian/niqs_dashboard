import { useState } from "react";
import StudentList from "./StudentList";
import ClassInfo from "./ClassInfo";

const NavTab = ({ students }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <ul className="nav-tabs flex gap-20 px-20 py-2 my-6 w-full shadow-md border-black sticky top-0 bg-white z-10 pt-3 scroll-pt-10">
        <li
          className={`cursor-pointer font-bold hover:bg-blue-100 transition-all py-1 px-2 rounded-md  ${
            activeTab === 0 ? " bg-blue-100" : ""
          }`}
          onClick={() => handleTabClick(0)}
        >
          Gen. Information
        </li>
        <li
          className={`cursor-pointer font-bold hover:bg-blue-100 transition-all py-1 px-2 rounded-md  ${
            activeTab === 1 ? "active bg-blue-100" : ""
          }`}
          onClick={() => handleTabClick(1)}
        >
          Student List
        </li>
        <li
          className={`cursor-pointer font-bold hover:bg-blue-100 transition-all py-1 px-2 rounded-md  ${
            activeTab === 2 ? "active bg-blue-100" : ""
          }`}
          onClick={() => handleTabClick(2)}
        >
          Schedule
        </li>
      </ul>
      <div className="tab-content px-20 overflow-y-scroll">
        {activeTab === 0 && <ClassInfo />}
        {activeTab === 1 && <StudentList students={students} />}
        {activeTab === 2 && <div>Class Schedule</div>}
      </div>
    </div>
  );
};

export default NavTab;
