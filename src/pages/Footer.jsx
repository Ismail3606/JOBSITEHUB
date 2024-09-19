
import '@fortawesome/fontawesome-free/css/all.min.css';



const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-10 px-">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* CareerHub Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">CareerHub</h3>
              <p className="text-sm mb-4">
                There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.
              </p>
              
              <div className="flex space-x-4">
                {/* Social Icons */}
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
  
            {/* Company Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Work</a></li>
                <li><a href="#" className="hover:text-white">Latest News</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
  
            {/* Product Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Prototype</a></li>
                <li><a href="#" className="hover:text-white">Plans & Pricing</a></li>
                <li><a href="#" className="hover:text-white">Customers</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
  
            {/* Support Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Desk</a></li>
                <li><a href="#" className="hover:text-white">Sales</a></li>
                <li><a href="#" className="hover:text-white">Become a Partner</a></li>
                <li><a href="#" className="hover:text-white">Developers</a></li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm">
                524 Broadway, NYC
              </p>
              <p className="text-sm">
                +1 777 - 978 - 5570
              </p>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm">
              &copy; 2023 CareerHub. All Rights Reserved
            </p>
            <p className="text-sm">
              Powered by CareerHub
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  