import axios from 'axios'
import { useState } from 'react'

export default function usePostAPI() {

    const [loading ,setLoading]=useState(false)
    const [data,setData]=useState(null)
    const [error,setError]=useState({})

const postData=async(URL ,payload)=>{
    setLoading(true)
    axios
    .post(URL,payload)
    .then(function(response){
        setData(response.data)
        setLoading(false)
    })
    .catch(function(error){
        setError({...error,errorMsg: error.response.data.message})
        console.log(error)
        setLoading(false)
    })
}
  return  {data,loading,error,postData}
  
}
