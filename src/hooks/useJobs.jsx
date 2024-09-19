import { useEffect, useState } from "react";


const useJobs = () => {
    const url = '../../public/Jobs.json'  
    const [jobs, setJobs] = useState([])
    const [loading,setLoding] = useState(true)
    const [error, setError] = useState('')
useEffect(() => {
    const fetchJobs = async () => {
        try{
            const res = await fetch(url)
            if(!res.ok){
                throw new Error("Opps! job data not found")
            }
            const data = await res.json()
            setJobs(data)
        }catch(err){
            setError(err)
        }finally{
            setLoding(false)
        }
    }
    fetchJobs()
}, [])
    return[jobs,loading, error]
};

export default useJobs;