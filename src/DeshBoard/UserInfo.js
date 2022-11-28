import React, { useEffect, useState } from 'react';

const UserInfo = () => {
    const [usersInfo, setUsersInfo] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/alluser')
            .then(res => res.json())
            .then(data => setUsersInfo(data))
    },[])
    console.log(usersInfo)
    return (
        <div>
            {
                    usersInfo?.map(user=>console.log(user))
                 
                }
            
        </div>
    );
};

export default UserInfo;