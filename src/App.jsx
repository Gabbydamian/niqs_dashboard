import Nav from "./components/Nav";
import Main from "./components/Main";
import "./App.css";
import { useState, useEffect } from "react";
import { read, utils } from "xlsx";

function App() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
      (async () => {
        const f = await fetch("http://localhost:8080");
        const ab = await f.arrayBuffer();

        const wb = read(ab);

        const ws = wb.Sheets[wb.SheetNames[0]];
        const data = utils.sheet_to_json(ws);
        console.log(data);
        setStudents(data);
      })();
    }, []);
  return (
    <>
      <Nav />
      <Main students={students} />
    </>
  );
}

export default App;
