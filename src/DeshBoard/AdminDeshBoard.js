import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import NavBar from '../NavBar/NavBar';
import UserInfo from './UserInfo';

const AdminDeshBoard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {/* <UserInfo></UserInfo> */}
            
                

            
            {/* <NavBar></NavBar>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Role</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user=>console.log(user))
                     
                    }

                    
                     

                    </tbody>
                </table>
            </div> */}



        </div>
    );
};

export default AdminDeshBoard;