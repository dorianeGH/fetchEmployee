import logo from "./logo.svg";
import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";
import React from "react";
import axios from "axios";

function App() {
  const [employee, setEmployee] = React.useState("");
  const getEmployee = () => {
    // Send the request
    axios
      .get("https://randomuser.me/api?nat=en")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };
  return (
    <div className='App'>
      <DisplayEmployee employee={employee} />
      <button type='button' onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}
export default App;
