import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function PastQuiz() {

    const { email } = useParams();

    const [data, setData] = useState([]);
    const [message, setMessage] = useState([]);

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {

        axios.post("http://localhost:4000/pastQuizes", { email })
        .then(res => {

            setData(res.data.data || []);
            setMessage(res.data.message || []);

        })
        .catch(err => console.log(err));

    }, [email]);



    // merge quiz + response
    const merge = data.map((item, i) => ({

        quiz: message[i],
        response: item

    })).filter(item => item.quiz && item.response);



    // sort latest first
    const filterSort = merge.sort(
        (a,b) => new Date(b.quiz.quizDate) - new Date(a.quiz.quizDate)
    );



    const redirect = (quizName) => {

        navigate(`/User/resultWindow/${email}/${quizName}`);

    };



    return (

        <div>

            <div className="header">
                <img src={require("../pariksha.jpg")} alt="logo"/>
            </div>



            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    <a className="navbar-brand">Navbar</a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <Link className="nav-link"
                                to={`/User/dashboard/${email}`}>
                                Dashboard
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link"
                                to={`/User/liveQuiz/${email}`}>
                                Live Quiz
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link"
                                to={`/User/pastQuiz/${email}`}>
                                Past Quizzes
                                </Link>
                            </li>


                            <li className="nav-item dropdown">

                                <a className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown">
                                Profile
                                </a>

                                <ul className="dropdown-menu">

                                    <li>
                                        <Link className="dropdown-item"
                                        to={`/User/update/${email}`}>
                                        Update
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item"
                                        to={`/User/delete/${email}`}>
                                        Delete
                                        </Link>
                                    </li>

                                </ul>

                            </li>

                        </ul>

                    </div>

                </div>

            </nav>



            <table className="table">

                <thead>

                    <tr>
                        <th>Name of Quiz</th>
                        <th>Date/Time</th>
                        <th>Marks Scored</th>
                        <th>Max Marks</th>
                        <th>Show Result</th>
                    </tr>

                </thead>


                <tbody>

                {

                    filterSort.length === 0 ?

                    <tr>
                        <td colSpan="5" className="text-center">
                        No past quizzes found
                        </td>
                    </tr>

                    :

                    filterSort.map((item, index) => (

                        <tr key={index}>

                            <td>{item.quiz.quizName}</td>

                            <td>
                            {
                                moment(item.quiz.quizDate)
                                .format("Do MMM YYYY, h:mm:ss a")
                            }
                            </td>

                            <td>{item.response.score || 0}</td>

                            <td>
                            {(item.quiz.Query?.length || 0) * 4}
                            </td>

                            <td>
                                <button
                                className="btn btn-outline-success"
                                onClick={() =>
                                redirect(item.quiz.quizName)}
                                >
                                View Result
                                </button>
                            </td>

                        </tr>

                    ))

                }

                </tbody>

            </table>



            <div className="footer text-center">

                <br/>

                <p>
                © 2026 Designed, Developed and Hosted by National Informatics Center.
                </p>

                <br/>

            </div>


        </div>

    );

}

export default PastQuiz;
