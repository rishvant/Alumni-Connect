const Dashboard = () => {
    return (
            <section class="users">
    <div class="cards">
        <div class="card">
            <div class="box-1">
                <h1>5</h1>
                <h3>Alumni</h3>
            </div>
            <div class="icon-case">
                <img src="students.png" alt="" />
            </div>
        </div>
        <div class="card">
            <div class="box-1">
                <h1>5</h1>
                <h3>Events</h3>
            </div>
            <div class="icon-case">
                <img src="teachers.png" alt="" />
            </div>
        </div>
        <div class="card">
            <div class="box-1">
                <h1>5</h1>
                <h3>Gallery Photos</h3>
            </div>
            <div class="icon-case">
                <img src="schools.png" alt="" />
            </div>
        </div>
        <div class="card">
            <div class="box-1">
                <h1>1</h1>
                <h3>Verified User</h3>
            </div>
            <div class="icon-case">
                <img src="income.png" alt="" />
            </div>
        </div>
    </div>
    <div class="new-students">
        <div class="title">
            <h2>Users</h2>
            <a href="/admin/users" class="btn btn-1">View All</a>
            <a href="/admin-adduser" class="btn">Add User</a>
        </div>
        <table>
            <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Batch/Branch</th>
                <th>Roll No.</th>
                <th>Verification</th>
                <th>Action</th>
            </tr>
            <div class="user-data">
                {/* <% data.slice(0,10).forEach(user => { %> */}
            <tr>
                <td><img src="uploads/<%= user.image %>" alt="Image" /></td>
                <td>name</td>
                <td>user.branch</td>
                <td>roll</td>
                <td class="verification-status">
                    {/* <% if (user.verified) { %> */}
                        <span class="verified">Verified</span>
                    {/* <% } else { %> */}
                        <span class="unverified">Not Verified</span>
                    {/* <% } %> */}
                </td>
                <td class="action-buttons">
                    {/* <% if (!user.verified) { %> */}
                        <button class="verify-btn" data-user-id="<%= user._id %>">
                            <i class="fa fa-check"></i> Verify
                        </button>
                    {/* <% } %> */}
                </td>
                <td class="action-buttons">
                    <a href="/admin-useredit"><button><i class="fa fa-edit"></i>Edit</button></a>
                    <button><i class="fa fa-eye"></i> View</button>
                    <button onclick="removeUser('<%= user._id %>')"><i class="fa fa-trash"></i> Delete</button>
            </td>
            </tr>
            {/* <% }); %> */}
            </div>
        </table>
    </div>
    </section>
    )
}

export default Dashboard;