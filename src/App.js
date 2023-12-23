import React,{useState} from 'react'
import DummyAuth from './DummyAuth'
import UserData from './UserData';
import "./style.css"

export default function App() {
  const [flag,setFlag] = useState(false);
  return (
    <div>
      {flag?<UserData setFlag={setFlag}/>:<DummyAuth setFlag={setFlag}/>}
    </div>
  )
}
