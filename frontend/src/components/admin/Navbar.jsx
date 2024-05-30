const AdminNavbar = () => {
    return (
        <>
            <header>
                <div class="logosec">
                    <div class="logo">Admin Panel</div>
                    <img src=
                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                        class="icn menuicn"
                        id="menuicn"
                        alt="menu-icon" />
                </div>
            </header>

            <div class="main-container">
                <div class="navcontainer">
                    <nav class="nav">
                        <div class="nav-upper-options">
					
                            <a href="/admin"><div class="nav-option option1">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                    class="nav-img"
                                    alt="dashboard" />
                                    <h3> Dashboard</h3>
                            </div></a>

                            <a href="/admin/gallery"><div class="nav-option">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                                    class="nav-img"
                                    alt="articles" />
                                    <h3> Gallery</h3>
                            </div></a>

                            <a href="/admin/events">
                                <div class="nav-option option4">
                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                                        class="nav-img"
                                        alt="institution" />
                                        <h3> Events</h3>
                                </div></a>

                            <a href="/admin/users">
                                <div class="nav-option option5">
                                    <img src=
                                        "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                                        class="nav-img"
                                        alt="blog" />
                                        <h3> Users</h3>
                                </div></a>

                            <a href="/logout"><div class="nav-option logout">
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                                    class="nav-img"
                                    alt="logout" />
                                    <h3>Logout</h3>
                            </div></a>

                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default AdminNavbar;