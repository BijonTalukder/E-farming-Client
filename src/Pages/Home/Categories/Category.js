import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import CategoryData from './CategoryData';

const Category = () => {
    const category=useLoaderData()
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           
            {
                category.map(c=><CategoryData data={c}></CategoryData>)
                
               
            }
            <BookingModal></BookingModal>
            
        </div>
    );
};

export default Category;