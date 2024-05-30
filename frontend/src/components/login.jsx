import { FaExternalLinkAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useRef } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        try {
            const response = await axios.post("https://alumni-connect-backend-swwq.onrender.com/alumni/login", { username, password });
            const accessToken = response.data.token;
            localStorage.setItem("accessToken", accessToken);
            toast.success("Successfully Logged In!");
            navigate("/profile");
        }
        catch (err) {
            console.log("Error:", err);
            if (err.response && err.response.status === 409) {
                toast.error("User is not Registered!");
            }
            else if (err.response && err.response.status === 403) {
                toast.error("Invalid Password!");
            }
            else {
                toast.error("An unexpected error occurred.");
            }
        }
    }

    return (
        <>
            <Navbar/>
            <div className="bg-img-login">
                <img src="/slider2.jpg" alt="IIIT Una" />
            </div>
            <div className="login-card"><img className="profile-img-card" src="/iiitu-logo.png" />
                <p className="profile-name-card">User Login</p>
                <form className="form-signin" onSubmit={handleLogin}><span className="reauth-email"> </span>
                    <input ref={usernameRef} className="form-control" name="username" type="text" id="inputEmail" required="" placeholder="Username" />
                    <input ref={passwordRef} className="form-control" name="password" type="password" id="inputPassword" required="" placeholder="Password" />
                    <span>Initially use passing year as your password</span>
                    <input type="submit" className="btn btn-primary btn-lg d-block btn-signin w-100" value="Sign in" />
                </form>
                <Link to="/register" className="register-link">Didn't registered! <FaExternalLinkAlt /></Link>
            </div>
        </>
    )
}

export default Login;