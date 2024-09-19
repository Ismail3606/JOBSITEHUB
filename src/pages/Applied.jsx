import Jobcards from "../Components/Jobcards";




const Applied = () => {
    
        const jobs = [
            {
              company: "Google",
              imgae :"https://i.postimg.cc/5N9jWK2z/google.jpg",
              position: "Technical Database Engineer",
              location: "Dhaka, Bangladesh",
              salary: "100K - 150K",
              onsite: false,
              remote: true,
            },
            {
              company: "Netflix",
              position: "Senior Product Designer",
              location: "Dhaka, Bangladesh",
              salary: "100K - 150K",
              onsite: true,
              remote: false,
            },
            {
              company: "Tesla",
              position: "Software Engineer",
              location: "Dhaka, Bangladesh",
              salary: "100K - 150K",
              onsite: true,
              remote: false,
            },
            {
              company: "Google",
              position: "Technical Database Engineer",
              location: "Dhaka, Bangladesh",
              salary: "100K - 150K",
              onsite: false,
              remote: true,
            },
          ];
        
          return (
            <div className="py-12 bg-gray-100">
              <h2 className="text-3xl font-bold text-center mb-8">Featured Jobs</h2>
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {jobs.map((job, index) => (
                    <Jobcards key={index} data={job} />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                    See All Jobs
                  </button>
                </div>
              </div>
            </div>
          );
        };

export default Applied;