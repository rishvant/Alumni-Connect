import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Profile from './components/profile.jsx';
import Login from './components/login.jsx';
import Register from "./components/register.jsx";
import Directory from "./components/directory.jsx";
import Convocation from './components/Convocation.jsx';
import AdminLogin from './components/admin/login.jsx';
import Dashboard from './components/admin/dashboard.jsx';
import GalleryPage from './components/GalleryPage.jsx';
import "./styles/gallery.css";
import "./styles/style.css";
import "./styles/bootstrap.min.css";
import "./styles/templatemo-training-studio.css";
import "./styles/font-awesome.min.css";
import "./styles/magnific-popup.css";
import "./styles/normalize.css";
import "./styles/responsive.css";
import "./styles/Google-Style-Login.css";
import "./styles/directory-profile.css";
import DirectoryProfile from './components/DirectoryProfile.jsx';
import ProfileEdit from './components/ProfileEdit.jsx';
import AlumniMeet from './components/AlumniMeet.jsx';
// import DirectoryProfile from './components/DirectoryProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/directory",
    element: <Directory />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/convocation",
    element: <Convocation />
  },
  {
    path: "/admin-login",
    element: <AdminLogin />
  },
  {
    path: "/admin",
    element: <Dashboard />
  },
  {
    path: "/gallery",
    element: <GalleryPage />
  },
  {
    path: "/directory/:id",
    element: <DirectoryProfile />
  },
  {
    path: "/profile/edit",
    element: <ProfileEdit />
  },
  {
    path: "/events/alumni-meet",
    element: <AlumniMeet />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
    <Toaster />
  </React.StrictMode>,
)