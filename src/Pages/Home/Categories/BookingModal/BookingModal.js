import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const BookingModal = ({booked}) => {
  let today = new Date();
  const  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  const {user}= useContext(AuthContext)
  const handleBooking=event=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const phone=form.phone.value;
    const location =form.location.value;
    console.log(name,email,phone,location)
    const bookedDatabase={
      itemName:booked.name,
      name,
      email,
      phone,
      location
      
    }
    fetch('http://localhost:5000/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookedDatabase)
    })
    .then(res=>res.json())
    .then(data=>{
      form.reset()
    })

  }
  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Congratulations</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
            <input type="text" placeholder="Type here" value={booked.name} className="input input-bordered w-full max-w-xs" />
           
            <input name='name' defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
            <input type='email' defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='phone' placeholder="phone" className="input input-bordered w-full max-w-xs" />
            <input type="text" name='location' placeholder="location" className="input input-bordered w-full max-w-xs" />
            <button className="input input-bordered w-full max-w-sm" type='submit'>Submit</button>
          </form>
        </div>
      </div>

    </>
  );
};

export default BookingModal;