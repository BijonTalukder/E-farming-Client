import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const NavBar = () => {
  const {logOut,user} = useContext(AuthContext);
  // const [isAdmin]=useAdmin(user?.email)
  const [type] = useAdmin(user?.email)
  console.log(type)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       
      
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
       
        {
         type.role==='admin' && <li><Link to='/admindeshboard'> DeshBoard </Link></li>
        }
        {
         type.role==='saller' && <li><Link to='/sallerdeshboard'> DeshBoard </Link></li>
        }
       {
         type.role==='buyer'  && <li><Link to="/dashboard">Deshboard</Link></li>
        }
         {
          user && user.uid? <>
      
         
          <button onClick={logOut}>LogOut</button>
          
          </> :
          <>
                 <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
          </>
          

        }
       
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
       {
         type.role==='admin' && <li><Link to='/admindeshboard'> DeshBoard </Link></li>
        }

        {
         type.role==='saller' && <li><Link to='/sallerdeshboard'> DeshBoard </Link></li>
        }
        {
         type.role==='buyer' && <li><Link to="/dashboard">Dashboard</Link></li>
        }
         {
          user && user.uid? <>
      
         
          <button onClick={logOut}>LogOut</button>
          
          </> :
          <>
                 <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
          </>
          

        }
       
    
    </ul>
  </div>
  
</div>
    );
};

export default NavBar;