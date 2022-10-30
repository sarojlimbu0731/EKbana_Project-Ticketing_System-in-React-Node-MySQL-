import { useEffect, useState } from "react"
import axios from 'axios'


const useFetch=(url)=> {
    const [data,setData]= useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(false)

    //when url changes useEffect will run 

useEffect(()=>{
    const fetchData= async() =>{
        // setLoading(true)
        try {
            const res=  await axios.get(url)
            setData(res)
            setLoading(false)
        } catch (err) {
           setError(true) 
        }
        
    }
    fetchData()
},[url])


const reFetchData= async() =>{
    setLoading(true)
    try {
        const res=  await axios.get(url)
        setData(res)
    } catch (err) {
       setError(true) 
    }
    setLoading(false)
}

return {data,loading,error, reFetchData}

}


export default useFetch;
 
