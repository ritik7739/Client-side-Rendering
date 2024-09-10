import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {

  const [userData,setUserData]=useState();
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    .then((res)=>{
      setUserData(res.data);
      setLoading(false);
    })
  },[])

  return (
        <div className="flex flex-col justify-center h-screen">
          <div className="flex justify-center">
            <div className="border p-8 rounded">
              <div>
                {userData?.name}
              </div>
              {userData?.email}
            </div>
          </div>
        </div>
  )
}

export default App
