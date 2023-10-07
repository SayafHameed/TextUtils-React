// import logo from './logo.svg';
import "./App.css";
import PropTypes from "prop-types";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";
// import { Route, Switch } from "react-router";
function App() {
  const [btnText, newBtnText] = useState("Dark Mode");
  const [mystyle, newstyle] = useState({
    color: "dark",
    backgroundColor: "light",
  });
  const darkmode = () => {
    //to dark mode
    if (mystyle.color === "dark" && mystyle.backgroundColor === "light") {
      newstyle({
        color: "light",
        backgroundColor: "dark",
      });
      newBtnText("Light Mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      newstyle({
        color: "dark",
        backgroundColor: "light",
      });
      newBtnText("Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils";
    }
  };
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    // <Router>
      <div>
        <nav className="d-flex">
          <Navbar title="TextUtils" mode={mystyle} />
          <button
            type="button"
            onClick={darkmode}
            className={`btn btn-${mystyle.color} text-${mystyle.backgroundColor} mx-2`}
          >
            {btnText}
          </button>
        </nav>
        <Alert alert={alert} />
        <div className="container m-5 p-5 ">
          {/* <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/home"
              element={
                
              }
            ></Route>
          </Routes> */}
          <TextForm
                  show={showAlert}
                  heading="Enter the text to analyze"
                  mode={mystyle}
                />
        </div>
      </div>
    // </Router>
  );
}
Navbar.propTypes = {
  // types of props
  title: PropTypes.string.isRequired,
};
//default props: if i dont pass props these are default
Navbar.defaultProps = {
  title: "set",
};
export default App;
