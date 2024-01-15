import React, { useEffect, useState } from 'react'
import HigherOrder from './HigherOrder';

const UserList = ({data}) => {
    // const [users,setUsers] = useState([]);
    // const [terms,setTerms] = useState("")
    // useEffect(()=>{
    //     const fetchUser = async()=>{
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users")
    //         const json = await res.json();
    //         setUsers(json);
    //         console.log(json)
    //     };
    //     fetchUser();
    // },[])

    let renderUsers = data.map((user)=>{
        return(
            <>
                {/* <input type='text' value={terms} onChange={(e)=>setTerms(e.target.value)}/> */}
                <div key={user.id}>
                    <p><strong>{user.name}</strong></p>
                </div> 
            </>
        );
    });

    // let filterUser = users.filter(({name})=>{
    //     return name.indexOf(terms)>=0;
    // }).map((user)=>{
    //     return(
    //         <>                
    //             <div key={user.id}>
    //                 <p><strong>{user.name}</strong></p>
    //             </div> 
    //         </>
    //     );
    // });

  return (
        <div>
            <div>{renderUsers}</div>
        </div>
  )
}

const Searchuser = HigherOrder(UserList,"users");

export default Searchuser