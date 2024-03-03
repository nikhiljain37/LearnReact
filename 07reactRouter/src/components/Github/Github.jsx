// import React from 'react'
import {useLoaderData} from 'react-router-dom' 
// import { useEffect, useState } from "react"

function Github() {
    
    const data = useLoaderData()

    // const [data,setData] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/nikhiljain37')
    //     .then(response => response.json())
    //     .then(data=> {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className="text-center m-4 bg-gray-500 text-white
    p-4 text-3xl">Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

//for using the data from below method we use hook useLoaderData
export const githubInfoLoader =async () =>{
    const response = await fetch('https://api.github.com/users/nikhiljain37')
    return response.json()
}