import React,{useEffect} from 'react'

export default function UserData({setFlag}) {

    async function fetchData(){
        const userData = JSON.parse(localStorage.getItem("userData"));
        console.log(userData.id);
        const getData = await fetch(`https://dummyjson.com/users/${userData.id}`);
        localStorage.setItem("UserDetails",JSON.stringify(await getData.json()));
    }

    useEffect(()=>{
        fetchData();
    },[])

    function displayUserDetails(){
        const userDetails = JSON.parse(localStorage.getItem("UserDetails"));
        let arr=[];
        for (const key in userDetails) {
            arr.push([key,userDetails[key]]);
        }
        return arr;
    }

  return (
    <div className='user-data-container'>
      <h1 className='center'>User Profile</h1>
      <p className='m-3'>Go to <span className='text-blue pointer' onClick={()=>{
        localStorage.clear();
        setFlag(false);
      }}>Login</span> Page</p>
      <div className='user-details'>
        {
            displayUserDetails().map((value)=>{
                return <p className='user-key'><span className='bold'>{value[0]}</span> : {JSON.stringify(value[1])}</p>
            })
        }
      </div>
    </div>
  )
}
