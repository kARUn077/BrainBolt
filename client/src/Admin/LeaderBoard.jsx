import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function LeaderBoard() {

    const { quizName } = useParams();

    const [data, setData] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {

        axios.post("http://localhost:4000/leaderBoard", { quizName })
        .then(result => {

            setData(result.data.data || []);
            setMessage(result.data.message || []);

        })
        .catch(error => console.log(error));

    }, [quizName]);


    const merged = data.map((item, index) => ({
        detail: message[index] || {},
        response: item || {}
    }));


    const sorted = merged.sort(
        (a, b) => (b.response.score || 0) - (a.response.score || 0)
    );


    return (

        <div>

            <div className="header">
                <img src={require("../pariksha.jpg")} alt="logo"/>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    <Link className="navbar-brand" to="/Admin/quizDetails">
                        Services
                    </Link>

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

                    </div>

                </div>

            </nav>


            <div className="container mt-4">

                <h3 className="text-center mb-3">
                    Leaderboard — {quizName}
                </h3>


                <table className="table table-bordered">

                    <thead>

                        <tr>

                            <th>Rank</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Score</th>
                            <th>Correct Score</th>

                        </tr>

                    </thead>

                    <tbody>

                        {sorted.length === 0 ?

                            <tr>
                                <td colSpan="5" className="text-center">
                                    No Data Found
                                </td>
                            </tr>

                        :

                            sorted.map((value, index) => (

                                <tr key={index}>

                                    <td>{index + 1}</td>

                                    <td>{value.detail.name || "N/A"}</td>

                                    <td>{value.detail.email || "N/A"}</td>

                                    <td>{value.response.score || 0}</td>

                                    <td>{(value.response.correct || 0) * 4}</td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default LeaderBoard;
