import React, { useEffect, useState } from 'react';
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
  MDBCardTitle
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
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

    return (
        <>
            {user && (
                <section style={{ backgroundColor: '#eee' }}>
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
                                        {user.image ? (
                                            <MDBCardImage
                                                src={user.image}
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: "125px", height: "125px" }}
                                                fluid />
                                        ) : (
                                            <MDBCardImage
                                                src="/default-profile.jpg"
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: "125px", height: "125px" }}
                                                fluid />
                                        )}
                                        <MDBCardText></MDBCardText>
                                        <div className="d-flex justify-content-center mb-2">
                                            <button style={{ width: "40%", height: "7vh" }} className='btn'>Edit Profile</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard className="mb-4 mb-lg-0">
                                    <MDBCardBody className="p-0">
                                        <MDBListGroup className="rounded-3">
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                                <MDBCardText>{user.github}</MDBCardText>
                                            </MDBListGroupItem>
                                            {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                                <MDBCardText>{user.twitter}</MDBCardText>
                                            </MDBListGroupItem> */}
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                                <MDBCardText>{user.instagram}</MDBCardText>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#3b5998' }} />
                                                <MDBCardText>{user.linkedin}</MDBCardText>
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
                                                <MDBCardText className="text-muted">{user.name}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Email</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Mobile</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{user.phone}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Date of Birth</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{new Date(user.dob).toLocaleDateString('en-IN')}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Username</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{user.username}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Gender</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{user.gender}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Profession</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{user.prpfession}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr />
                                        <MDBRow>
                                            <MDBCol sm="3">
                                                <MDBCardText>Roll No.</MDBCardText>
                                            </MDBCol>
                                            <MDBCol sm="9">
                                                <MDBCardText className="text-muted">{user.roll}</MDBCardText>
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
                                                <MDBCardText className="text-muted">{user.company}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            )}
        </>
    )
}

export default Profile;