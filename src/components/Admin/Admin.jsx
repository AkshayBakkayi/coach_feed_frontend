import { useState } from "react";

import axios from "axios";

import "../../styles/admin.css";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function Admin() {

    const [feed, setFeed] = useState({
        title: "",
        message: ""
    });

    const [course, setCourse] = useState({
        courseName: "",
        trainerName: "",
        duration: "",
        description: ""
    });

    const [note, setNote] = useState({
        title: "",
        link: ""
    });




    // ADD FEED

    const addFeed = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://coach-feed-2.onrender.com/feed",
                feed
            );

            alert("Feed Added Successfully");

            setFeed({
                title: "",
                message: ""
            });

        } catch (error) {

            console.log(error);

        }

    };




    // ADD COURSE

    const addCourse = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://coach-feed-2.onrender.com/courses",
                course
            );

            alert("Course Added Successfully");

            setCourse({
                courseName: "",
                trainerName: "",
                duration: "",
                description: ""
            });

        } catch (error) {

            console.log(error);

        }

    };




    // ADD NOTE

    const addNote = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://coach-feed-2.onrender.com/notes",
                note
            );

            alert("Note Added Successfully");

            setNote({
                title: "",
                link: ""
            });

        } catch (error) {

            console.log(error);

        }

    };




    return (

        <>

            <Navbar />




            <div className="admin-page">

                <div className="admin-hero">

                    <h1>
                        Admin Dashboard
                    </h1>

                    <p>
                        Manage realtime feeds, courses and notes
                    </p>

                </div>






                <div className="admin-dashboard">




                    {/* FEED */}

                    <div className="admin-card">

                        <h2>Add Feed</h2>

                        <form onSubmit={addFeed}>

                            <input
                                type="text"
                                placeholder="Feed Title"
                                value={feed.title}
                                onChange={(e) =>
                                    setFeed({
                                        ...feed,
                                        title: e.target.value
                                    })
                                }
                                required
                            />

                            <textarea
                                placeholder="Feed Message"
                                value={feed.message}
                                onChange={(e) =>
                                    setFeed({
                                        ...feed,
                                        message: e.target.value
                                    })
                                }
                                required
                            />

                            <button type="submit">
                                Add Feed
                            </button>

                        </form>

                    </div>






                    {/* COURSE */}

                    <div className="admin-card">

                        <h2>Add Course</h2>

                        <form onSubmit={addCourse}>

                            <input
                                type="text"
                                placeholder="Course Name"
                                value={course.courseName}
                                onChange={(e) =>
                                    setCourse({
                                        ...course,
                                        courseName: e.target.value
                                    })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Trainer Name"
                                value={course.trainerName}
                                onChange={(e) =>
                                    setCourse({
                                        ...course,
                                        trainerName: e.target.value
                                    })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Duration"
                                value={course.duration}
                                onChange={(e) =>
                                    setCourse({
                                        ...course,
                                        duration: e.target.value
                                    })
                                }
                                required
                            />

                            <textarea
                                placeholder="Course Description"
                                value={course.description}
                                onChange={(e) =>
                                    setCourse({
                                        ...course,
                                        description: e.target.value
                                    })
                                }
                                required
                            />

                            <button type="submit">
                                Add Course
                            </button>

                        </form>

                    </div>






                    {/* NOTES */}

                    <div className="admin-card">

                        <h2>Add Notes</h2>

                        <form onSubmit={addNote}>

                            <input
                                type="text"
                                placeholder="Notes Title"
                                value={note.title}
                                onChange={(e) =>
                                    setNote({
                                        ...note,
                                        title: e.target.value
                                    })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Google Drive / PDF Link"
                                value={note.link}
                                onChange={(e) =>
                                    setNote({
                                        ...note,
                                        link: e.target.value
                                    })
                                }
                                required
                            />

                            <button type="submit">
                                Add Notes
                            </button>

                        </form>

                    </div>

                </div>

            </div>




            <Footer />

        </>

    );

}

export default Admin;