import { useState } from "react";
import { useEffect } from "react";



const useCategory = () => {
    const url = './Category.json'
    const [category, setcategory] = useState([])
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const fatchCategory = async () => {
            try{
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error ("opps! Data not found")
                }
                const data =await res.json()
                setcategory(data)
            }catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        fatchCategory()
    }, [])
    return[category, error,  loading]

};

export default useCategory;