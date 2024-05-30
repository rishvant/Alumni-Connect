import { Link } from "react-router-dom";
import "../styles/user-register.css";
import Navbar from "./Navbar";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaAsterisk } from "react-icons/fa6";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
    const nameRef = useRef();
    const rollRef = useRef();
    const genderRef = useRef();
    const courseRef = useRef();
    const branchRef = useRef();
    const fatherRef = useRef();
    const professionRef = useRef();
    const emailRef = useRef();
    const dobRef = useRef();
    const yearRef = useRef();
    const phoneRef = useRef();
    const companyRef = useRef();
    const linkedinRef = useRef();
    const instagramRef = useRef();
    const githubRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef=useRef();
    const imageRef = useRef();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const roll = rollRef.current.value;
        const gender = genderRef.current.value;
        const course = courseRef.current.value;
        const branch = branchRef.current.value;
        const father = fatherRef.current.value;
        const profession = professionRef.current.value;
        const email = emailRef.current.value;
        const dob = dobRef.current.value;
        const year = yearRef.current.value;
        const phone = phoneRef.current.value;
        const company = companyRef.current.value;
        const linkedin = linkedinRef.current.value;
        const instagram = instagramRef.current.value;
        const github = githubRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const image = imageRef.current.files[0];
        if (password !== confirmPassword) {
            toast.error("Password does not match!");
            return;
        }
        try {
            const response = await axios.post("https://alumni-connect-backend-swwq.onrender.com/alumni/register", {
                username, password, name, father, profession, gender, email, roll, phone, dob, course, branch, year, linkedin, instagram, github, company, image
            }, {
                headers: {
                    "Content-Type":"multipart/form-data"
                }
            });
            if (response.status === 200) {
                toast.success("Account created successfully!, Wait for verification");
            }
            nameRef.current.value = "";
            rollRef.current.value = "";
            genderRef.current.value = "";
            courseRef.current.value = "";
            branchRef.current.value = "";
            fatherRef.current.value = "";
            professionRef.current.value = "";
            emailRef.current.value = "";
            dobRef.current.value = "";
            yearRef.current.value = "";
            phoneRef.current.value = "";
            companyRef.current.value = "";
            linkedinRef.current.value = "";
            instagramRef.current.value = "";
            usernameRef.current.value = "";
            passwordRef.current.value = "";
            confirmPasswordRef.current.value = "";
            imageRef.current.value = "";
        }
        catch (err) {
            console.log("Error:", err);
            if (err.response && err.response.status === 409) {
                toast.error("User already exists!");
            }
            else {
                toast.error("An unexpected error occurred.");
            }
        }
    }

    return (
        <>
            <Navbar/>
                    <div className="bg-img-register">
                <img src="/slider2.jpg" alt="IIIT Una" />
            </div>
                <div className="page-content">
            <div className="form-v4-content">
                <form className="form-detail" id="myform" onSubmit={handleRegister}>
                    <div className="row-1">
                    <h2>User Register</h2>
                    </div>
                    <div className="form-group">
                        <div className="form-row form-row-1">
                            <label for="name">Name <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={nameRef} type="text" name="name" id="first_name" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1">
                            <label for="roll">Roll No. <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={rollRef} type="text" name="roll" id="last_name" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1">
                            <div className="form-group-1">
                                    <label for="gender">Gender <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                                <select ref={genderRef} className="select" name="gender" required>
                                    <option data-value="1" className="option selected ">Male</option>
                                    <option data-value="2" className="option">Female</option>
                                    <option data-value="3" className="option">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row form-row-1 course-select" style={{marginLeft:"-15%"}}>
                            <div className="form-group-1">
                                <label for="course">Course <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                                <select ref={courseRef} className="select" name="course" required>
                                    <option data-value="1" className="option selected ">-Select-</option>
                                    <option data-value="2" className="option">B.Tech</option>
                                    <option data-value="3" className="option">M.Tech</option>
                                    <option data-value="4" className="option">PhD</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row form-row-1 branch-select" style={{marginLeft:"-15%"}}>
                            <div className="form-group-1">
                                <label for="branch">Branch <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                                <select ref={branchRef} className="select" name="branch" required>
                                    <option data-value="1" className="option selected ">-Select-</option>
                                    <option data-value="2" className="option">CSE</option>
                                    <option data-value="3" className="option">ECE</option>
                                    <option data-value="4" className="option">IT</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row form-row-1 ">
                            <label for="father_name">Father's Name <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={fatherRef} type="text" name="father_name" id="first_name" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1 ">
                            <label for="profession">Profession</label>
                            <input ref={professionRef} type="text" name="profession" id="first_name" className="input-text" />
                        </div>
                        <div className="form-row form-row-1 ">
                            <label for="email">E-Mail <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={emailRef} type="text" name="email" id="first_name" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1 ">
                            <label for="dob">Date of Birth <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={dobRef} type="date" name="dob" id="first_name" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1 ">
                            <div className="form-group-1">
                                <label for="year">Year of Graduation <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                                <select ref={yearRef} className="select" name="year" required>
                                    <option data-value="1" className="option selected ">-Select-</option>
                                    <option data-value="2" className="option">2014</option>
                                    <option data-value="3" className="option">2015</option>
                                    <option data-value="4" className="option">2016</option>
                                    <option data-value="5" className="option">2017</option>
                                    <option data-value="5" className="option">2018</option>
                                    <option data-value="5" className="option">2019</option>
                                    <option data-value="5" className="option">2020</option>
                                    <option data-value="5" className="option">2021</option>
                                    <option data-value="5" className="option">2022</option>
                                    <option data-value="5" className="option">2023</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-row form-row-1 ">
                            <label for="phone">Mobile Number <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={phoneRef} type="text" name="phone" id="password" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1 ">
                            <label for="company">Current Company</label>
                            <input ref={companyRef} type="text" name="company" id="password" className="input-text" />
                        </div>
                        <div className="form-row form-row-1">
                            <label for="linkedin">Linkedin Account Link <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={linkedinRef} type="text" name="linkedin" id="password" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1">
                            <label for="instagram">Instagram Account Link</label>
                            <input ref={instagramRef} type="text" name="instagram" id="password" className="input-text" />
                        </div>
                        <div className="form-row form-row-1">
                            <label for="github">Github Account Link</label>
                            <input ref={githubRef} type="text" name="github" id="password" className="input-text" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-row form-row-1 ">
                            <label for="username">Username <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={usernameRef} type="text" name="username" id="password" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1 ">
                            <label for="password">Password <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={passwordRef} type="password" name="password" id="password" className="input-text" required />
                        </div>
                        <div className="form-row form-row-1">
                            <label for="confirm_password">Confirm Password <FaAsterisk style={{ color: "red", position:"absolute", fontSize:"8px"}} /></label>
                            <input ref={confirmPasswordRef} type="password" name="confirm_password" id="password" className="input-text" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-row form-row-1 ">
                            <label for="image">Upload Profile Photo</label>
                            <input ref={imageRef} type="file" name="image" id="password" className="input-text" accept="image/*" required />
                        </div>
                    </div>

                    <div className="form-row-last">
                        <input type="submit" className="register" value="Register" href="/register" />
                        <Link to="/login" style={{marginLeft: "5%"}}>Already Registered <FaExternalLinkAlt/></Link>
                    </div>
                </form>
            </div>
            </div>
            </>
    )
}

export default Register;