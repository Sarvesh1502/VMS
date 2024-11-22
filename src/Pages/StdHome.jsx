import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import "./Stdhome.css"; // Import custom CSS file

const StdHome = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation will only happen once when scrolling down
        });
    }, []);

    return (
        <div style={{ background: "linear-gradient(to bottom, #f5f7fa, #c3cfe2)", minHeight: "100vh", padding: "1rem" }}>
            {/* Floating Shapes */}
            <div className="shape shape-small animate_animated animate_pulse" style={{ backgroundColor: "#ff8c00" }}></div>
            <div className="shape shape-medium animate_animated animate_pulse animate_delay-2s" style={{ backgroundColor: "#1e90ff" }}></div>
            <div className="shape shape-large animate_animated animate_pulse animate_delay-4s" style={{ backgroundColor: "#32cd32" }}></div>

            {/* Jumbotron Section */}
            <div
                className="container my-5"
                style={{
                    background: "linear-gradient(to right, #ff7eb3, #ff758c, #ff6263)",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "2rem",
                }}
                data-aos="fade-up"
            >
                <div className="jumbotron">
                    <h1 className="display-4 text-shadow">Make a Difference Today!</h1>
                    <p className="lead text-shadow">
                        At REVA University, we nurture leaders who are driven by purpose and passion. Explore your potential, engage with your community, and make a lasting impact.
                    </p>
                </div>
            </div>

            {/* Why Volunteer Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4 text-glow" data-aos="zoom-in">
                    Why Should You Volunteer at REVA University?
                </h2>
                <div className="row">
                    {/* Personal Growth Card */}
                    <div className="col-md-4 mb-3" data-aos="flip-left">
                        <div className="card reason-card" style={{ background: "#fceabb", borderRadius: "10px" }}>
                            <div className="card-body text-center">
                                <div className="icon-bounce">
                                    <i className="bi bi-person-circle" style={{ fontSize: "2rem", color: "#ff4500" }}></i>
                                </div>
                                <h5 className="card-title">Personal Growth</h5>
                                <p className="card-text">
                                    At REVA, volunteering helps you build confidence, enhance your skills, and step outside your comfort zone. Join activities that allow you to discover your strengths while contributing to the university's vibrant community.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Network & Connect Card */}
                    <div className="col-md-4 mb-3" data-aos="flip-left" data-aos-delay="200">
                        <div className="card reason-card" style={{ background: "#b4f8c8", borderRadius: "10px" }}>
                            <div className="card-body text-center">
                                <div className="icon-bounce">
                                    <i className="bi bi-people-fill" style={{ fontSize: "2rem", color: "#00bfff" }}></i>
                                </div>
                                <h5 className="card-title">Network & Connect</h5>
                                <p className="card-text">
                                    At REVA University, connect with peers, mentors, and alumni who share your vision. Collaborate on projects and initiatives that not only enhance your learning but also expand your professional network.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Make an Impact Card */}
                    <div className="col-md-4 mb-3" data-aos="flip-left" data-aos-delay="400">
                        <div className="card reason-card" style={{ background: "#c3aed6", borderRadius: "10px" }}>
                            <div className="card-body text-center">
                                <div className="icon-bounce">
                                    <i className="bi bi-heart-fill" style={{ fontSize: "2rem", color: "#ff1493" }}></i>
                                </div>
                                <h5 className="card-title">Make an Impact</h5>
                                <p className="card-text">
                                    By volunteering at REVA University, you are directly contributing to the growth and reputation of our community. Your efforts inspire others and foster a culture of positive change and inclusivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-3" style={{ backgroundColor: "#222", color: "#fff" }}>
                <p className="mb-0">© 2024 REVA University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default StdHome;
