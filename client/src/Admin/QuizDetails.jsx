import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function QuizDetails() {
  const [values, setValues] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");

    navigate("/Admin/adminLogin");
  };

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:4000/liveQuiz")

      .then((result) => {
        setValues(result.data || []);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Leaderboard redirect
  const redirectLeaderboard = (quizName) => {
    navigate(`/Admin/leaderBoard/${quizName}`);
  };

  // Quiz details redirect (optional)
  const redirectDetails = (quizName) => {
    navigate(`/Admin/quizDetails/${quizName}`);
  };

  // Delete quiz
  const deleteQuiz = (quizName) => {
    axios
      .post("http://localhost:4000/deleteQuiz", { quizName })

      .then((result) => {
        if (result.data === "quiz deleted") {
          toast.success("Quiz Deleted Successfully");

          // refresh list
          setValues((prev) => prev.filter((q) => q.quizName !== quizName));
        }
      })

      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* HEADER */}
      <div className="header">
        <img src={require("../pariksha.jpg")} alt="logo" />
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Services</a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Admin/quizDetails">
                  Quiz Details
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Admin/createQuiz">
                  Create Quiz
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Admin/upload">
                  Upload
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Admin/totalUsers">
                  Total Users
                </Link>
              </li>
            </ul>

            {/* RIGHT SIDE LOGOUT */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* TABLE */}
      <div className="container mt-4">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name of the Quiz</th>
              <th>Date/Time</th>
              <th>Max Marks</th>
              <th>Details</th>
              <th>Leaderboard</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {values.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No Quiz Found
                </td>
              </tr>
            ) : (
              values.map((value, index) => (
                <tr key={index}>
                  <td>{value.quizName}</td>

                  <td>{moment(value.quizDate).format("Do MMM YYYY, HH:mm")}</td>

                  <td>{(value.Query?.length || 0) * 4}</td>

                  {/* DETAILS BUTTON */}
                  <td>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => redirectDetails(value.quizName)}
                    >
                      Details
                    </button>
                  </td>

                  {/* LEADERBOARD BUTTON */}
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => redirectLeaderboard(value.quizName)}
                    >
                      Leaderboard
                    </button>
                  </td>

                  {/* DELETE BUTTON */}
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteQuiz(value.quizName)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <br />

        <p>
          © 2026 Designed, Developed and Hosted by National Informatics Center.
        </p>

        <br />
      </div>

      <ToastContainer />
    </div>
  );
}

export default QuizDetails;
