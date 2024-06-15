import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const BioDatas = () => {
  const axiosPublic = useAxiosPublic();
  const { data: bios = [] } = useQuery({
    queryKey: ["bios"],
    queryFn: async () => {
      const res = await axiosPublic.get("bio");
      return res.data;
    },
  });
  console.log(bios);
  return (
    <div className="mb-10 gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <SectionTitle heading="All Biodata" ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-6 space-x-4">
        {bios.map((bio) => (
          <div
            key={bio._id}
            className="bg-white mt-4 h-[100%] overflow-hidden shadow rounded-lg border mx-4 box"
          >
            <div className="px-4 py-5 sm:px-6">
              <div className="flex justify-between items-center">
                <img
                  src={bio.profile_image}
                  className="w-20 h-16 rounded-full"
                  alt=""
                />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Contact Details
                </h3>
                <button className="text-sm font-medium text-gray-500">
                  View Profile
                </button>
              </div>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                The contact information is provided below.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {bio.name}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {bio.contact_email}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {bio.mobile_number}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Occupation
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {bio.occupation}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Biodata Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {bio.gender}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Age</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {bio.age}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioDatas;
