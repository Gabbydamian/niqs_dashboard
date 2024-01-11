import { useEffect, useState } from "react";
import { read, utils } from "xlsx";

const StudentList = () => {
  // const students = [
  //       { "id": 1, "name": "John Doe", "grade": "A"
  //       },
  //       { "id": 2, "name": "Jane Smith", "grade": "B"
  //       },
  //       { "id": 3, "name": "Bob Johnson", "grade": "C"
  //       },
  //       { "id": 4, "name": "Mary Williams", "grade": "D"
  //       },
  //       { "id": 5, "name": "James Brown", "grade": "F"
  //       },
  //       { "id": 6, "name": "Patricia Jones", "grade": "A"
  //       },
  //       { "id": 7, "name": "Michael Miller", "grade": "B"
  //       },
  //       { "id": 8, "name": "Linda Davis", "grade": "C"
  //       },
  //       { "id": 9, "name": "William Garcia", "grade": "D"
  //       },
  //       { "id": 10, "name": "Elizabeth Rodriguez", "grade": "F"
  //       },
  //       { "id": 11, "name": "David Wilson", "grade": "A"
  //       },
  //       { "id": 12, "name": "Barbara Martinez", "grade": "B"
  //       },
  //       { "id": 13, "name": "Richard Anderson", "grade": "C"
  //       },
  //       { "id": 14, "name": "Susan Taylor", "grade": "D"
  //       },
  //       { "id": 15, "name": "Joseph Thomas", "grade": "F"
  //       },
  //       { "id": 16, "name": "Jessica Hernandez", "grade": "A"
  //       },
  //       { "id": 17, "name": "Thomas Moore", "grade": "B"
  //       },
  //       { "id": 18, "name": "Sarah Martin", "grade": "C"
  //       },
  //       { "id": 19, "name": "Charles Jackson", "grade": "D"
  //       },
  //       { "id": 20, "name": "Karen Thompson", "grade": "F"
  //       },
  //       { "id": 21, "name": "Christopher White", "grade": "A"
  //       },
  //       { "id": 22, "name": "Lisa Lopez", "grade": "B"
  //       },
  //       { "id": 23, "name": "Daniel Lee", "grade": "C"
  //       },
  //       { "id": 24, "name": "Margaret Harris", "grade": "D"
  //       },
  //       { "id": 25, "name": "Matthew Clark", "grade": "F"
  //       },
  //       { "id": 26, "name": "Ashley King", "grade": "A"
  //       },
  //       { "id": 27, "name": "Andrew Baker", "grade": "B"
  //       },
  //       { "id": 28, "name": "Amanda Gonzalez", "grade": "C"
  //       },
  //       { "id": 29, "name": "Kevin Nelson", "grade": "D"
  //       },
  //       { "id": 30, "name": "Deborah Carter", "grade": "F"
  //       },
  //       { "id": 31, "name": "George Mitchell", "grade": "A"
  //       },
  //       { "id": 32, "name": "Stephanie Perez", "grade": "B"
  //       },
  //       { "id": 33, "name": "Edward Roberts", "grade": "C"},
  //     ]

  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => {
      /* Download from https://sheetjs.com/pres.numbers */
      const f = await fetch("http://localhost:8080");
      const ab = await f.arrayBuffer();

      const wb = read(ab);

      const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
      const data = utils.sheet_to_json(ws); // generate objects
      console.log(data);
      setStudents(data); // update state
    })();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {students.map((student) => (
        <a href="#" key={student.id} className="w-1/4 p-4">
          <img className="w-32 h-32 rounded-full mx-auto mb-2"
            src="https://th.bing.com/th/id/OIP.GnZca7JlXZTkV2mQWgUkFQHaHa?rs=1&pid=ImgDetMain"
            alt="#"
          />
          <p className="font-bold text-center">{student.name}</p>
          <p className="text-center">{student.reg}</p>
        </a>
      ))}
    </div>
  );
};

export default StudentList;
