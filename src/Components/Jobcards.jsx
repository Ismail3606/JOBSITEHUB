// JobCard Component



const Jobcards = ({value}) => {
    const {
        company_name,
        image_link,
        job_address,
        job_title,
        job_type,
        salary_range, 
      } = value;
      
    
    return (
        
    //          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    //   <div className="flex items-center mb-4">
    //     <div className="w-10 h-10 mr-4" >{image_link} alt={company_name}</div>
    
          
        
    //     <div>
    //       <h3 className="text-xl font-semibold">{job_title}</h3>
    //       <p className="text-gray-500">{job_type}</p>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-between mb-4">
    //     <span className="text-sm text-gray-600">
    //       <i className="fas fa-map-marker-alt mr-1"> </i>
    //       {location}
    //     </span>
    //     <span className="text-sm text-gray-600">Salary: {salary_range}</span>
    //   </div>
    //   <div className="flex space-x-2 ">
    //     <div className="flex">
    //        
    //         <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mr-2">
    //           Onsite
    //         </span>
    //       
    //         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
    //           Remote
    //         </span>
    //       
    //     </div>
    //     <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
    //       Full Time
    //     </span>
    //   </div>
    //   <button className="mt-4 w-full text-center bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
    //     View Details
    //   </button>
    // </div>

    //     );
    //   };

<>
<section className="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ">
      {/* Company Logo and Job Info */}
      <div className="flex items-center mb-4">
        {/* Company Logo */}
        <img src={image_link} alt={company_name} className="w-10 h-10 mr-4 rounded-full object-contain " />
        
        {/* Job Title and Type */}
        <div>
          <h3 className="font-bold text-2xl capitalize">{job_title}</h3>
          <p className="text-gray-500">{job_type}</p>
        </div>
      </div>

      {/* Job Address and Salary */}
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex gap-2 items-center">
          <i className="fas fa-map-marker-alt text-gray-500"></i>
          <h3 className="font-medium">{job_address}</h3>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fas fa-dollar-sign text-gray-500"></i>
          <h3 className="font-medium">{salary_range}</h3>
        </div>
      </div>

      {/* Location and Salary Display */}
      <div className="flex items-center justify-between my-4">
        <span className="text-sm text-gray-600">
          <i className="fas fa-map-marker-alt mr-1"></i>
          {job_address}
        </span>
        <span className="text-sm text-gray-600">Salary: {salary_range}</span>
      </div>

      {/* Job Tags (Onsite/Remote/Full Time) */}
      <div className="flex space-x-2">
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Onsite</span>
        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Remote</span>
        <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">Full Time</span>
      </div>

      {/* View Details Button */}
      <button className="mt-4 w-1/4 mx-auto bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600">
        View Details
      </button>
    </section>
  

 </>
    );
};
          
  export default Jobcards;
          