import NavTab from "./NavTab";
import PropTypes from "prop-types";
import ClassInfo from "./ClassInfo";
import StudentList from "./StudentList";

const Main = ({ students }) => {
  const tabpages = [
    { id: 0, page: "Gen. Information", content: <ClassInfo /> },
    {
      id: 1,
      page: "Student List",
      content: <StudentList students={students} />,
    },
    { id: 2, page: "Schedule", content: <div>Class Schedule</div> },
  ];
  return (
    <main className="container-xl relative px-[6rem] py-[3rem] mx-auto">
      <div
        id="class-info"
        className="mt-8 flex items-center justify-start gap-[3rem]"
      >
        <div className="logo">
          <div className="w-[10rem] h-[10rem] rounded-full flex items-center justify-center">
            <img
              className="w-full h-full rounded-full"
              src="https://th.bing.com/th/id/OIP.T66DwA3Uysr-kv1WRydS3AHaE7?rs=1&pid=ImgDetMain"
              alt="class"
            />
          </div>
        </div>
        <div className="class-info flex flex-col gap-2">
          <div className="name flex">
            <h2 className="text-lg font-bold">Name:</h2>
            <p className="text-xl ml-2">Imperial Quantifiers</p>
          </div>
          <div className="population flex">
            <h2 className="text-lg font-bold">Population:</h2>
            <p className="text-xl ml-2">{students.length}</p>
          </div>
          <div className="level flex">
            <h2 className="text-lg font-bold">Level of Study:</h2>
            <p className="text-xl ml-2">500 lvl</p>
          </div>
        </div>
      </div>
      <div id="tabs" className="absolute inset-0 mt-[16rem] w-full h-12">
        <NavTab students={students} tabpages={tabpages} />
      </div>
    </main>
  );
};

Main.propTypes = {
  students: PropTypes.array.isRequired,
};

export default Main;
