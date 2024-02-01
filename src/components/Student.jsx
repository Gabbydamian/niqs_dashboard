import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import NavTab from "./NavTab";
import StudentInfo from "./StudentInfo";

const Student = ({ students }) => {
  let { id } = useParams();
  id = parseInt(id); // If the id in students is a number, you need to parse the id from the URL
  const student = students.find((student) => student.id === id);
  console.log(student);

  const tabpages = [
    {
      id: 0,
      page: "Gen. Information",
      content: <StudentInfo student={student} />,
    },
    {
      id: 1,
      page: "Contact Information",
      content: "student",
    },
  ];

  return student ? (
    <main className="container-xl px-[6rem] py-[3rem] mx-auto">
      <div
        id="class-info"
        className="mt-8 flex items-center justify-start gap-[3rem]"
      >
        <div className="user-image">
          <div className="w-[10rem] h-[10rem] rounded-full flex items-center justify-center">
            {/* <h1 className="text-5xl font-bold">IM</h1> */}
            <img
              className="w-full h-full rounded-full"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="class"
            />
          </div>
        </div>
        <div className="class-info flex flex-col gap-2">
          <div className="name flex">
            <h2 className="text-lg font-bold">Name:</h2>
            <p className="text-xl ml-2">{student.name}</p>
          </div>
          <div className="population flex">
            <h2 className="text-lg font-bold">Nickname:</h2>
            <p className="text-xl ml-2">{student.nickname ? student.nickname : 'empty_string'}</p>
          </div>
          <div className="level flex">
            <h2 className="text-lg font-bold">D.O.B:</h2>
            <p className="text-xl ml-2">{student.birthday ? student.birthday: 'not found'}</p>
          </div>
        </div>
      </div>
      <div id="tabs" className="absolute inset-0 mt-[20rem] w-full h-12">
        <NavTab student={student} tabpages={tabpages} />
      </div>
    </main>
  ) : (
    <div>Student not found</div>
  );
};

Student.propTypes = {
  students: PropTypes.array.isRequired,
};

export default Student;
