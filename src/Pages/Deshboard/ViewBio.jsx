import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const ViewBio = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: biodatas = [] } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosSecure.get("bio");
      return res.data;
    },
  });
  const biodata = biodatas.filter((data) => data.email == user.email);
  console.log(biodata);
  return (
    <div>
      <div>
        {biodata.map((bio) => (
            <div key={bio._id} className=" rounded-lg shadow-lg cursor-pointer p-11">
            <div className="w-[820px] h-full">
              <div className="">
                <div className="flex justify-end mr-10 mt-10">
              <SectionTitle heading="My Biodata"></SectionTitle>
                  <img
                    alt="blog photo"
                    src={bio.image}
                    className="object-cover w-[150px] max-h-40"
                  />
                </div>
                <div>
                  <div className="grid grid-cols-2 mr-10 gap-5 ml-10 mt-10">
                    <p className="text-base font-medium text-gray-600 ">
                      Name:{" "}
                      <span className="text-base font-medium text-gray-800 ">
                        {bio.name}
                      </span>
                    </p>
                    <p className="text-base font-medium text-gray-600 ">
                      Occupation:{" "}
                      <span className="font-medium text-indigo-500 text-md">
                        {bio.occupation}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Date Of Birth:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800 ">
                        {bio.date_of_birth}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Age:{" "}
                      <span className="font-medium text-indigo-500 text-md">
                        {bio.age}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Gender:{" "}
                      <span className="font-medium text-indigo-500 text-md">
                        {bio.gender}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Race:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.race}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Height:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800 ">
                        {bio.height} inc
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Weight:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.weight}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Fathers Name:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800 ">
                        {bio.father_name} inc
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Mothers Name:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.mother_name}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Expected Partner Age:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.expected_partner_age}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Permanent Division:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800 ">
                        {bio.permanent_division}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Present Division:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.present_division}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Expected Partner Height:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.expected_partner_height}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Expected Partner Weight:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.expected_partner_weight}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Contact Email:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.email}
                      </span>
                    </p>
                    <p className="mb-2 text-base font-medium text-gray-600 ">
                      Mobile Number:{" "}
                      <span className="mb-2 text-base font-medium text-gray-800">
                        {bio.mobile_number}
                      </span>
                    </p>
                    <div>
                      <button
                        //   onClick={()=>handleDelete(bio._id)}
                        href="#"
                        title="Get quote now"
                        className="relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        Make Premium
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBio;
