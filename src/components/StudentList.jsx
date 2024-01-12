import PropTypes from "prop-types";

const StudentList = ({ students }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {students.map((student) => (
        <a
          href="#"
          key={student.id}
          className="w-1/5 h-64 p-4 shadow-sm m-2 hover:shadow-md hover:bg-gray-100 transition-all rounded-md bg-gray-50"
        >
          <img
            className="w-32 h-32 rounded-full mx-auto mb-6"
            src="https://th.bing.com/th/id/OIP.GnZca7JlXZTkV2mQWgUkFQHaHa?rs=1&pid=ImgDetMain"
            alt="#"
          />
          <div id="student-info">
            <p className="font-bold text-center">{student.name}</p>
            <p className="text-center">{student.reg}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

StudentList.propTypes = {
  students: PropTypes.array.isRequired,
};

export default StudentList;
