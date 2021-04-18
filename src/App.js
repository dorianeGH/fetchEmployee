import logo from "./logo.svg";
import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";
import useState from "react";
import axios from "axios";

const sampleEmployee = {
  gender: "male",
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  location: {
    street: {
      number: 761,
      name: "Tay Street",
    },
    city: "Timaru",
    postcode: 76111,
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

/*function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <DisplayEmployee employee={sampleEmployee} />
      </header>
    </div>
  );
} */

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
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
