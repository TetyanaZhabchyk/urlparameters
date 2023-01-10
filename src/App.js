import "./styles.css";
import * as React from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";

/* Instructions 
  Create two Routes so that the given navigation works.

  When the user navigates to /Ram, they should see "Student: Ram".
  When the user navigates to /ids/1, they should see "Ids : 1".
*/

const Employee = () => {

    let { name } = useParams();

    return (
        <div className="display">
            <h3>Employee: {name}</h3>
        </div>
    );
};

const Ids = () => {
    let { id } = useParams();

    return (
        <div className="display">
            <h3>Ids : {id}</h3>
        </div>
    );
};

export default function App() {
    return (
        <Router>
            <h2>Employee</h2>
            <ul>
                <li>
                    <Link to="/ram">Ram</Link>
                </li>
                <li>
                    <Link to="/rakshman">Lakshman</Link>
                </li>
                <li>
                    <Link to="/bheem">Bheem</Link>
                </li>
            </ul>
            <h2>Id's</h2>
            <ul>
                <li>
                    <Link to="/Ids/1">1</Link>
                </li>
                <li>
                    <Link to="/Ids/2">2</Link>
                </li>
                <li>
                    <Link to="/Ids/3">3</Link>
                </li>
                <li>
                    <Link to="/Ids/4">4</Link>
                </li>
            </ul>

            <hr />

            <Routes>
                <Route path="/:name" element={<Employee />} />
                <Route path="/Ids/:id" element={<Ids />} />
            </Routes>
        </Router>
    );
}
