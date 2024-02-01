import PropTypes from 'prop-types';

const StudentInfo = ({ student }) => {
    return (
      <section className="mt-6 px-2 flex flex-col gap-5">
        <div className="name flex">
          <h2 className="text-md font-bold">Matric No:</h2>
          <p className="text-lg ml-2">{student.reg}</p>
        </div>
      </section>
    );
};

StudentInfo.propTypes = {
    student: PropTypes.object.isRequired,
};

export default StudentInfo;
