import { Link } from "react-router-dom";

const Biodata = ({ bio }) => {
  return (
    <div>
      <div className="gap-6 flex w-full items-center justify-center">
        <div className="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
          <div className="flex items-center gap-4">
            <img
              src={bio.profile_image}
              className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            />
            <div className="w-fit transition-all transform duration-500">
              <h1 className="text-gray-600 font-bold">{bio.name}</h1>
              <p className="text-gray-400">{bio.occupation}</p>
              <a className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
                {bio.contact_email}
              </a>
            </div>
          </div>
          <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
            <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
              <Link to={`/details/${bio.id}`}><button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-sm rounded-full transition-transform transform-gpu hover:-translate-y-2 hover:shadow-lg">
                View Details
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
