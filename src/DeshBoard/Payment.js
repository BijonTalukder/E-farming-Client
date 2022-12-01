import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData();
    console.log(data)
   

    return (
        <div>
            paid
        </div>
    );
};

export default Payment;