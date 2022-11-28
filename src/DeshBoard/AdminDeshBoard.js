import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const AdminDeshBoard = () => {
    return (
        <div>
            <NavBar></NavBar>

        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Item Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                   {/* {
                    orders.map((order,index)=> <tr>
                        <th>{index+1}</th>
                        <td>{order.name}</td>
                        <td>{order.itemName}</td>
                        <td>{order.price}</td>
                    </tr>
)
                   } */}

                </tbody>
            </table>
        </div>

    </div>
    );
};

export default AdminDeshBoard;