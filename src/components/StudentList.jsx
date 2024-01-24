import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentList = ({ students }) => {
  // const getRandomImage = (gender) => {
  //   const randomNum = Math.floor(Math.random() * 100) + 1;
  //   const genderPrefix = gender === "male" ? "men" : "women";
  //   return `https://randomuser.me/api/portraits/${genderPrefix}/${randomNum}.jpg`;
  // };

  return (
    <div className="flex flex-wrap justify-center items-center">
      {students.map((student) => (
        <Link
          to={`/student/${student.id}`}
          key={student.id}
          className="w-1/5 h-64 p-4 shadow-sm m-2 hover:shadow-md hover:bg-gray-100 transition-all rounded-md bg-gray-50"
        >
          <img
            className="w-32 h-32 rounded-full mx-auto mb-6"
            // src={getRandomImage(student.gender)}
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="#"
          />
          <div id="student-info">
            <p className="font-bold text-center">{student.name}</p>
            <p className="text-center">{student.reg}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
};

export default StudentList;
