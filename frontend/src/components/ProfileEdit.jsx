import React, { useEffect, useRef, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardTitle,
  MDBInput,
  MDBFile,
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const ProfileEdit = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [images, setImages] = useState();
    const nameRef = useRef();
    const rollRef = useRef();
    const genderRef = useRef();
    const fatherRef = useRef();
    const professionRef = useRef();
    const emailRef = useRef();
    const dobRef = useRef();
    const phoneRef = useRef();
    const companyRef = useRef();
    const linkedinRef = useRef();
    const instagramRef = useRef();
    const githubRef = useRef();
    const usernameRef = useRef();
    const imageRef = useRef();
    const form = useRef(null);
    useEffect(() => {
        const authenticateUser = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                if (!token) {
                    navigate("/login");
                    toast.error("Please Log In first!");
                }
                const response = await axios.get("https://alumni-connect-backend-swwq.onrender.com/profile", {
                    headers: {
                        Authorization: token
                    }
                });
                console.log(response.data.user);
                setUser(response.data.user);
            }
            catch (err) {
                console.log("Error:", err);
            }
        }
        authenticateUser();
    }, []);

    const handleLogout = async () => {
        try {
            localStorage.removeItem("accessToken");
            toast.success("Successfully Logged Out!");
            navigate("/login");
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImages(e.target.files[0]);
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("accessToken");
            const formData = new FormData();
            const formElements = Array.from(e.target.elements);
            
            formElements.forEach((element) => {
                if (element.name) {
                    formData.append(element.name, element.value);
                }
            });
            console.log(formData);
            await axios.put("https://alumni-connect-backend-swwq.onrender.com/alumni/profile/edit", formData, {
                headers: {
                    Authorization: token
                }
            });
            toast.success("Profile update successfully!");
            navigate("/profile");
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    return (
        <>
            {user && (
                <section style={{ backgroundColor: '#eee' }}>
                    <form onSubmit={handleUpdate}>
                        <MDBContainer className="py-5">
                            <MDBRow>
                                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4 d-flex justify-content-center">
                                    <MDBCardImage src='/iiitu-logo.png' width="50px" />
                                    <MDBCardTitle style={{ textAlign: "center", marginTop: "1%", marginLeft: "1%" }}>IIITU Alumni Connect</MDBCardTitle>
                                </MDBBreadcrumb>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4 align-items-center">
                                        <MDBBreadcrumbItem>
                                            <Link to='/'>Home</Link>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                                        <div className="d-flex justify-content-center" style={{ marginLeft: "75%" }}>
                                            <button onClick={handleLogout} style={{ height: "7vh" }} className='btn'>Log Out</button>
                                        </div>
                                    </MDBBreadcrumb>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol lg="4">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody className="text-center">
                                            {images ? (
                                                <MDBCardImage
                                                    src={URL.createObjectURL(images)}
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "125px", height: "125px" }}
                                                    fluid />
                                            ) : (
                                                <MDBCardImage
                                                    src={user.image || "/default-profile.jpg"}
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "125px", height: "125px" }}
                                                    fluid />
                                            )}
                                            <MDBFile inputRef={imageRef} typeof="file" accept="image/*" onChange={imageChange} className="mb-4 mt-4" />
                                            <div className="d-flex justify-content-center mb-2">
                                                <button type="submit" style={{ width: "40%", height: "7vh" }} className='btn'>Save Profile</button>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="mb-4 mb-lg-0">
                                        <MDBCardBody className="p-0">
                                            <MDBListGroup className="rounded-3">
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                                    <MDBInput name="github" defaultValue={user.github} className="pl-2" type='text' />
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                                    <MDBInput name='instagram' defaultValue={user.instagram} className="pl-2" type='text' />
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#3b5998' }} />
                                                    <MDBInput name='linkedin' defaultValue={user.linkedin} className="pl-2" type='text' />
                                                </MDBListGroupItem>
                                            </MDBListGroup>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="8">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Full Name</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='name' defaultValue={user.name} className="pl-2" type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Email</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='email' defaultValue={user.email} className="pl-2" type='email' />
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Parent's Name</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='father' defaultValue={user.father} className="pl-2" type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Mobile</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='phone' defaultValue={user.phone} className="pl-2" type='number' />
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Date of Birth</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='dob' defaultValue={user.dob} className="pl-2" type='date' />
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Username</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='username' defaultValue={user.username} className="pl-2" type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Gender</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <select name='gender' class="form-select" >
                                                        <option value="" selected disabled hidden>-- Select --</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Other</option>
                                                    </select>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Profession</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='profession' defaultValue={user.profession} className="pl-2" type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Roll No.</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='roll' defaultValue={user.roll} className="pl-2" type='number' />
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Year of Passing</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{user.year}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Course</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{user.course}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Branch</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{user.branch}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>Company</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBInput name='company' defaultValue={user.company} className="pl-2" type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </form>
                </section>
            )}
        </>
    )
}

export default ProfileEdit;