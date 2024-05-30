import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaGithub, FaInstagram, FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const Directory = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://alumni-connect-backend-swwq.onrender.com/directory");
                setUsers(response.data.response);
                setLoading(false);
            }
            catch (err) {
                console.log("Error:", err);
            }
        }
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredUsers = users && users.filter(user => {
        return (
            (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            ((typeof user.roll === 'string' || typeof user.roll === 'number') && user.roll.toString().toLowerCase().includes(searchQuery.toLowerCase())) ||
            (user.branch && user.branch.toLowerCase().includes(searchQuery.toLowerCase())) ||
            ((typeof user.year === 'string' || typeof user.year === 'number') && user.year.toString().toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });

    return (
        <>
            <Navbar />
            <section className="section" id="trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading">
                                <h2>Alumni <em>Users</em></h2>
                                <img src="assets/images/line-dec.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="input-group mb-3" style={{ marginTop: "-70px" }}>
                                <input type="text" style={{ borderRadius: "5px", padding: "10px" }} className="form-control" placeholder="Search by Name, Roll, Branch, Year" value={searchQuery} onChange={handleSearchChange} name="search" />
                            </div>
                        </div>
                    </div>
                    {loading ? (
                        <div className="text-center" >
                            <div className="spinner-border" role="status" style={{ width: "3rem", height: "3rem" }}>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            {filteredUsers && filteredUsers.map((user, index) => (
                                <div className="col-lg-4" key={index}>
                                    <Link to={"/directory/" + user._id}>
                                        <div className="trainer-item">
                                            <div className="image-thumb">
                                                {user.image ? (
                                                    <center><img src={user.image} alt="" /></center>
                                                ) : (
                                                    <center><img src="/default-profile.jpg" alt="" /></center>
                                                )}
                                            </div>
                                            <div className="down-content">
                                                <span>{user.branch}, {user.year}</span>
                                                <h4>{user.name}</h4>
                                                <ul>
                                                    <li>{user.year}</li>
                                                </ul>
                                                <ul className="social-icons">
                                                    <li>
                                                        {user.linkedin && (
                                                            <a href={user.linkedin}><FaLinkedin style={{ fontSize: "20px" }} /></a>
                                                        )}
                                                    </li>
                                                    <li>
                                                        {user.instagram && (
                                                            <a href={user.instagram}><FaInstagram style={{ fontSize: "20px" }} /></a>
                                                        )}
                                                    </li>
                                                    <li>
                                                        {user.github && (
                                                            <a href={user.github}><FaGithub style={{ fontSize: "20px" }} /></a>
                                                        )}
                                                    </li>
                                                    <li className="company">
                                                        {user.company}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Directory;