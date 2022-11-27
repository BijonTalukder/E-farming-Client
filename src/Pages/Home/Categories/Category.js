import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import CategoryData from './CategoryData';

const Category = () => {
    const [booked,setBooked]=useState('')
    const category=useLoaderData()
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           
            {
                category.map(c=><CategoryData setBooked={setBooked} data={c}></CategoryData>)
                
               
            }
            <BookingModal booked={booked}></BookingModal>
            
        </div>
    );
};

export default Category;