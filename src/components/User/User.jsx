import { useEffect, useState } from "react";

import axios from "axios";

import { io } from "socket.io-client";

import "../../styles/user.css";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const socket = io("https://coach-feed-2.onrender.com");

function User() {

    const [feeds, setFeeds] = useState([]);

    const [courses, setCourses] = useState([]);

    const [notes, setNotes] = useState([]);

    const [isLoading, setIsLoading] = useState(true);




    useEffect(() => {

        fetchFeeds();

        fetchCourses();

        fetchNotes();




        socket.on("new-feed", (data) => {

            setFeeds((prev) => [data, ...prev]);

        });




        return () => {

            socket.off("new-feed");

        };

    }, []);




    // FETCH FEEDS

    const fetchFeeds = async () => {

        try {

            const response = await axios.get(
                "https://coach-feed-2.onrender.com/feed"
            );

            setFeeds(response.data);

        } catch (error) {

            console.log(error);

        }

    };




    // FETCH COURSES

    const fetchCourses = async () => {

        try {

            const response = await axios.get(
                "https://coach-feed-2.onrender.com/courses"
            );

            setCourses(response.data);

        } catch (error) {

            console.log(error);

        }

    };




    // FETCH NOTES

    const fetchNotes = async () => {

        try {

            const response = await axios.get(
                "https://coach-feed-2.onrender.com/notes"
            );

            setNotes(response.data);

            setIsLoading(false);

        } catch (error) {

            console.log(error);

            setIsLoading(false);

        }

    };




    return (

        <>

            <Navbar />




            <div className="user-container">

                <div className="hero-section">

                    <h1>
                        Coaching Platform
                    </h1>

                    <p>
                        Learn, Practice and Grow with realtime updates
                    </p>

                </div>






                {/* LOADING */}

                {
                    isLoading && (

                        <h2 className="loading-text">
                            Loading...
                        </h2>

                    )
                }






                {/* FEEDS */}

                <section className="section">

                    <h2 className="section-title">
                        Live Coaching Feeds
                    </h2>

                    <div className="feed-grid">

                        {
                            feeds.map((feed) => (

                                <div
                                    className="feed-card"
                                    key={feed._id}
                                >

                                    <h3>
                                        {feed.title}
                                    </h3>

                                    <p>
                                        {feed.message}
                                    </p>

                                    <span>
                                        {
                                            new Date(
                                                feed.createdAt
                                            ).toLocaleString()
                                        }
                                    </span>

                                </div>

                            ))
                        }

                    </div>

                </section>






                {/* COURSES */}

                <section className="section">

                    <h2 className="section-title">
                        Courses
                    </h2>

                    <div className="course-grid">

                        {
                            courses.map((course) => (

                                <div
                                    className="course-card"
                                    key={course._id}
                                >

                                    <h3>
                                        {course.courseName}
                                    </h3>

                                    <p>
                                        <strong>Trainer:</strong>
                                        {" "}
                                        {course.trainerName}
                                    </p>

                                    <p>
                                        <strong>Duration:</strong>
                                        {" "}
                                        {course.duration}
                                    </p>

                                    <p>
                                        {course.description}
                                    </p>

                                </div>

                            ))
                        }

                    </div>

                </section>






                {/* NOTES */}

                <section className="section">

                    <h2 className="section-title">
                        Notes
                    </h2>

                    <div className="notes-grid">

                        {
                            notes.map((note) => (

                                <div
                                    className="note-card"
                                    key={note._id}
                                >

                                    <h3>
                                        {note.title}
                                    </h3>

                                    <a
                                        href={note.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Open Notes
                                    </a>

                                </div>

                            ))
                        }

                    </div>

                </section>

            </div>




            <Footer />

        </>

    );

}

export default User;