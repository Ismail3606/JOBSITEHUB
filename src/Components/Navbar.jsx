import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        
             <header className="flex justify-between items-center p-2 px-24 py-3 bg-white shadow-sm ">
      {/* Left Side - Logo */}
      <div className="text-2xl font-bold text-black">
        CareerHub
      </div>

      {/* Middle Links */}
      <nav className="space-x-4 flex list-none">
      
        {/* |For navigate pages in react you  have to use Navlink | */}

          <li className="text-purple-500 hover:text-purple-700 list-none"><NavLink to="/">Statistics</NavLink></li>

     
        {/* |For navigate pages in react you  have to use Navlink | */}
        <li className="text-gray-500 hover:text-gray-700"><NavLink to="/Applied">Applied Jobs</NavLink></li>

           {/* |For navigate pages in react you  have to use Navlink | */}

           <li className="text-gray-500 hover:text-gray-700"><NavLink to="/Blogs">Blog</NavLink></li>
      </nav>

      {/* Right Side - Button */}
      <div>
        <button className="bg-gradient-to-r from-purple-400 to-blue-500 px-4 py-3 text-white font-semibold  rounded-lg hover:from-purple-500 hover:to-blue-600 ">
          Start Applying
        </button>
      </div>
    </header>
  );
};
    
    


export default Navbar;