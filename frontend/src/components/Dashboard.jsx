import React from 'react';
import './Dashboard.css';
import { FaCog, FaTimes } from 'react-icons/fa';

const users = [
    {
      id: 1,
      name: 'Michael Holz',
      date: '04/10/2013',
      role: 'Admin',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Paula Wilson',
      date: '05/08/2014',
      role: 'Publisher',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Antonio Moreno',
      date: '11/05/2015',
      role: 'Publisher',
      status: 'Suspended',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      id: 4,
      name: 'Mary Saveley',
      date: '06/09/2016',
      role: 'Reviewer',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
      id: 5,
      name: 'Martin Sommer',
      date: '12/08/2017',
      role: 'Moderator',
      status: 'Inactive',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
];


const Dashboard = () => {
    return (
        <div className='table-wrapper'>
            <h1 className='user-dashboard'>USER DASHBOARD </h1>
            <table className='user-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date Created</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user , index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td className='user-name'>
                                    <img src={user.avatar} alt="avatar" className="avatar" />
                                    {user.name}
                                </td>
                                <td>{user.date}</td>
                                <td>{user.role}</td>
                                <td> <span className={`status-dot ${user.status.toLowerCase()}`}></span> {user.status}</td>
                                <td>
                                    <FaCog className="action-icon edit" />
                                    <FaTimes className="action-icon delete" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};


export default Dashboard;