import { useState } from "react";
import PropTypes from "prop-types";

const NavTab = ({ student, tabpages }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    window.history.pushState({ activeTab: tabIndex }, "", "");
  };

  console.log(student);

  // useEffect(() => {
  //   const handlePopstate = (event) => {
  //     if (event.state && event.state.activeTab !== undefined) {
  //       setActiveTab(event.state.activeTab);
  //     }
  //   };

  //   window.addEventListener("popstate", handlePopstate);

  //   return () => {
  //     window.removeEventListener("popstate", handlePopstate);
  //   };
  // }, []);

  return (
    <div>
      <ul className="nav-tabs flex gap-20 px-20 py-2 my-6 w-full shadow-md border-black sticky top-0 bg-white z-10 pt-3 scroll-pt-10">
        {tabpages.map((page) => (
          <li
            className={`cursor-pointer font-bold hover:bg-blue-100 transition-all py-1 px-2 rounded-md  ${
              activeTab === page.id ? " bg-blue-100" : ""
            }`}
            onClick={() => handleTabClick(page.id)}
            key={page.id}
          >
            {page.page}
          </li>
        ))}
      </ul>
      <div className="tab-content px-20 overflow-y-scroll">
        {tabpages.map((page) => (
          <div key={page.id} style={{ display: activeTab === page.id ? "block" : "none" }}>
            {page.content}
          </div>
        ))}
      </div>
    </div>
  );
};

NavTab.propTypes = {
  tabpages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      page: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ),
  student: PropTypes.object,
};

export default NavTab;