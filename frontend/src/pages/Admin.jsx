import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./Admin.css"


const Admin = () => {
  return (
    <div>
        <Navbar />
        <div className='heading'>This is Admin Page</div>
        <div className='account-div'>
              <h2 className='heading'>User account details</h2>
              <div className='details'>
                <h3>Account Number :- xxxxxxxxx2345</h3>
                <h3>Amount        :- xxx000</h3>
                 <p>Reffered By   :- Saurav</p>
              </div>
            </div>
        <Footer />
    </div>
  )
}

export default Admin


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const AdminPage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch user data from the backend API
//     axios.get('/api/users') // Replace '/api/users' with the actual API endpoint for user data
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   return (
//     <div>
//         <Navbar />
//       <h1>User Details</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Footer />
//     </div>
//   );
// };

// export default AdminPage;
