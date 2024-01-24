import Nav from "./components/Nav";
import Main from "./components/Main";
import Student from "./components/Student";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    (async () => {
      const f = await fetch(
        "https://imp-dashboard.netlify.app/.netlify/functions/getStudents"
      );
      const data = await f.json();
      setStudents(data);
    })();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main students={students} />} />
        <Route path="/student/:id" element={<Student students={students} />} />
      </Routes>
    </Router>
  );
}

export default App;
