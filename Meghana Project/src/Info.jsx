import { Link } from "react-router-dom";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const Info = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col justify-center items-center p-5">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        Explore the Pages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          to="/page1"
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
        >
          <FaLaptop className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-xl font-medium text-gray-800">Screen 1</h2>
        </Link>
        <Link
          to="/page2"
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
        >
          <FaMobileAlt className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-xl font-medium text-gray-800">Screen 2</h2>
        </Link>
        <Link
          to="/page3"
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
        > 
          <FaTabletAlt className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-xl font-medium text-gray-800">Screen 3</h2>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Info;
