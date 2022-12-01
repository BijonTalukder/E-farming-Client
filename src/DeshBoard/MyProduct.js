import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyProduct = () => {
    const {user} = useContext(AuthContext)
    const [u, setU] = useState([])
    useEffect(() => {

        fetch(`http://localhost:5000/category?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setU(data))

    }, [user.email])
    console.log(u)
    return (
        <div>
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
    u.map((order,index)=> <tr>
        <th>{index+1}</th>
        <td>{order.sallerName}</td>
        <td>{order.name}</td>
        <td>{order.rePrice}</td>
    
    </tr>
)
   }

</tbody>
</table>
        </div>
    );
};

export default MyProduct;