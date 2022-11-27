import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DeshBoard = () => {
    const [orders, setOrder] = useState([])
    const { user } = useContext(AuthContext)
    const []=useAdmin()
    useEffect(() => {

        fetch(`http://localhost:5000/booking?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [user.email])
    return (
        <div>

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

                       {
                        orders.map((order,index)=> <tr>
                            <th>{index+1}</th>
                            <td>{order.name}</td>
                            <td>{order.itemName}</td>
                            <td>{order.price}</td>
                        </tr>
)
                       }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default DeshBoard;