import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdaptiveQuiz() {

    const [question, setQuestion] = useState(null);
    const [difficulty, setDifficulty] = useState(5);
    const [streak, setStreak] = useState(0);
    const [score, setScore] = useState(0);

    const email = localStorage.getItem("email");

    axios.defaults.withCredentials = true;

    // Load next question
    const loadQuestion = async () => {

        try {

            const res = await axios.post(
                "http://localhost:4000/v1/quiz/next",
                { email }
            );

            if (res.data.question) {

                setQuestion(res.data.question);
                setDifficulty(res.data.difficulty);
                setStreak(res.data.streak);
                setScore(res.data.score);

            } else {

                toast.error("No question available");

            }

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        loadQuestion();

    }, []);

    // Submit answer
    const submitAnswer = async (selected) => {

        try {

            const res = await axios.post(
                "http://localhost:4000/v1/quiz/answer",
                {
                    email,
                    selected,
                    correct: question.answer
                }
            );

            if (res.data.result === "correct") {

                toast.success("Correct Answer");

            } else {

                toast.error("Wrong Answer");

            }

            setDifficulty(res.data.difficulty);
            setStreak(res.data.streak);
            setScore(res.data.score);

            loadQuestion();

        } catch (err) {

            console.log(err);

        }

    };

    if (!question) return <h3>Loading...</h3>;

    return (

        <div className="container mt-5">

            <h2>Adaptive Quiz</h2>

            <hr />

            <p><b>Difficulty:</b> {difficulty}</p>
            <p><b>Streak:</b> {streak}</p>
            <p><b>Score:</b> {score}</p>

            <hr />

            <h4>{question.question}</h4>

            <div className="mt-3">

                <button
                    className="btn btn-primary m-2"
                    onClick={() => submitAnswer(question.opt1)}
                >
                    {question.opt1}
                </button>

                <button
                    className="btn btn-primary m-2"
                    onClick={() => submitAnswer(question.opt2)}
                >
                    {question.opt2}
                </button>

                <button
                    className="btn btn-primary m-2"
                    onClick={() => submitAnswer(question.opt3)}
                >
                    {question.opt3}
                </button>

                <button
                    className="btn btn-primary m-2"
                    onClick={() => submitAnswer(question.opt4)}
                >
                    {question.opt4}
                </button>

            </div>

            <ToastContainer />

        </div>

    );
}

export default AdaptiveQuiz;
