import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DirectoryProfile = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://alumni-connect-backend-swwq.onrender.com/directory/${id}`);
                setUser(response.data.response);
                setLoading(false);
            }
            catch (err) {
                console.log("Error:", err);
            }
        }
        fetchData();
    }, [id]);

    return (
        <>
            <Navbar />
            {loading ? (
                <div class="text-center" >
                    <div class="spinner-border" role="status" style={{ width: "3rem", height: "3rem", marginTop: "5rem" }}>
                    </div>
                </div>

            ) : (
                user &&
                <section className="profile-card">
                    <div className="card-cont">
                        <div className="left-container">
                            <img src={user.image} alt="Profile Image" />
                            <h2 className="gradienttext">{user.name}</h2>
                            <p>{user.profession}</p>
                            <div className="social-icons">
                                {user.linkedin &&
                                    <Link to={user.linkedin}><i className="fa fa-linkedin-square" style={{ fontSize: "30px", color: "#0072b1" }}></i></Link>
                                }
                                {user.instagram &&
                                    <Link to={user.instagram}><i className="fa fa-instagram" style={{ fontSize: "30px" }}></i></Link>
                                }
                                {user.github &&
                                    <Link to={user.github}><i className="fa fa-github" style={{ fontSize: "30px", color: "white" }}></i></Link>
                                }
                            </div>
                        </div>
                        <div className="right-container">
                            <h3 className="gradienttext" style={{ marginTop: "10%" }}>This Institute</h3>
                            <div className="batch">
                                <p className="batch-btn">{user.course}, {user.year}, {user.branch}</p>
                            </div>
                            {user.company &&
                                <div className="exp">
                                    <h3 className="gradienttext" style={{ marginTop: "10%" }}>Current Experience</h3>
                                    <p>
                                        Company: {user.company}
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            )}
            <Footer />
        </>
    )
}

export default DirectoryProfile;