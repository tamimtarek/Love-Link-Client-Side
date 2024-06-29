import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import Biodata from "../Home/Biodata/Biodata";

const BioDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: bio = [] } = useQuery({
    queryKey: ["bio"],
    queryFn: async () => {
      const res = await axiosPublic.get("bio");
      return res.data;
    },
  });
  const biodetail = bio.find((data) => data._id == id);
  const biodata = bio.filter((data) => data.gender == biodetail.gender);
  console.log(biodata);

  const bioDetail = {
    email: user.email,
    name: biodetail.name,
    father_name: biodetail.father_name,
    mother_name: biodetail.mother_name,
    age: biodetail.age,
    expected_partner_partner_age: biodetail.expected_partner_age,
    expected_partner_height: biodetail.expected_partner_height,
    expected_partner_weight: biodetail.expected_partner_weight,
    date_of_birth: biodetail.date_of_birth,
    occupation: biodetail.occupation,
    race: biodetail.race,
    height: biodetail.height,
    weight: biodetail.weight,
    gender: biodetail.gender,
    mobile_number: biodetail.mobile_number,
    contact_email: biodetail.contact_email,
    permanet_division: biodetail.permanet_division,
    present_division: biodetail.present_division,
    profile_image: biodetail.profile_image,
  };
  const handlefa = async () => {
    const bios = await axiosSecure.post("/favourits", bioDetail);
    console.log(bios);
    if (bios.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Biodata Add To the Favourit List",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="p-6 sm:p-12 dark:bg-gray-50 dark:text-gray-800">
      <div className="flex flex-col gap-9 space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img
          src={biodetail.image}
          alt=""
          className="self-center flex-shrink-0 w-48 h-48  border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
        />
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-center md:text-left">
            {biodetail.name}
          </h4>
          <p className="dark:text-gray-600">
            <span className="font-bold">Gender: </span>
            {biodetail.gender}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Heighth: </span>
            {biodetail.height}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Weight: </span>
            {biodetail.weight}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Date Of Birth: </span>
            {biodetail.date_of_birth}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Age: </span>
            {biodetail.age}Years
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Occupation: </span>
            {biodetail.occupation}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Race: </span>
            {biodetail.race}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Fathers Name: </span>
            {biodetail.father_name}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Mothers Name: </span>
            {biodetail.mother_name}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Permanent Division: </span>
            {biodetail.permanent_division}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Present Division: </span>
            {biodetail.present_division}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Expected Partner Age: </span>
            {biodetail.expected_partner_age}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Expected Partner Height: </span>
            {biodetail.expected_partner_height}
          </p>
          <p className="dark:text-gray-600">
            <span className="font-bold">Expected Partner Weight: </span>
            {biodetail.expected_partner_weight}
          </p>
          {isAdmin && (
            <p className="dark:text-gray-600">
              <span className="font-bold">Contact Email: </span>
              {biodetail.email}
            </p>
          )}
          {isAdmin && (
            <p className="dark:text-gray-600">
              <span className="font-bold"> Mobile Number: </span>
              {biodetail.mobile_number}
            </p>
          )}
          <div className="flex pt-4 space-x-4 align-center">
            <div className=" flex justify-center items-center">
              <div className="relative inline-flex  group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={handlefa}
                  href="#"
                 
                  className="relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  My Favourites
                </button>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="relative inline-flex  group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                  to={`/chackout/${biodetail._id}`}
                  href="#"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Request Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-28">
        <div className="border-t border-4 border-gray-400 flex-grow"></div>
        <div className="px-3 text-gray-800 font-bold text-2xl">OR</div>
        <div className="border-t border-4 border-gray-400 flex-grow"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {biodata.slice(0, 3).map((bio) => (
          <Biodata key={bio._id} bio={bio}></Biodata>
        ))}
      </div>
    </div>
  );
};

export default BioDetails;
