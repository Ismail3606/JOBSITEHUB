import { useState } from "react";
import Jobcards from "../Components/Jobcards";
import useJobs from "../hooks/useJobs";



const Jobs = () => {
    // const [jobs,loading, error]= useJobs()
    const [jobs] = useJobs()
    const [view ,setView] = useState(false)
    const viewIngCard = view ? jobs : jobs.slice(0,4)

    return (
        <>
            <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-2 ">Featured Jobs</h2>
      <p className="text-center mb-8 " >Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="container mx-auto px-4">
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8" >
            {
               viewIngCard.map((e) => ( <Jobcards key={e.id} value={e}/>))
            }
        </div>
        
        <div className="px-[2%]">
                        {
                            view ? <button onClick={() => setView(!view)} className="capitalize bg-accent text-button px-5 py-2 font-bold rounded-md transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] w-fit -semibold my-2 text-xl flex justify-center items-center group  ease-linea bg-primary text-accent group-hover:border-none bg-[#9333EA] text-white ">see less</button> : <button onClick={() => setView(!view)} className="capitalize bg-accent text-button px-5 py-2  font-bold  rounded-md transition-all duration-300 active:scale-95 hover:shadow-[3px_3px_rgba(247,_247,_247,_0.3)] w-fit -semibold my-2 text-xl flex justify-center items-center group  ease-linea bg-primary text-accent group-hover:border-none bg-[#9333EA] text-white"> see all</button>
                        }
                    </div>
                    </div>
                    </div>
            
        </>
    );
};

export default Jobs;