import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { set, useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const { register, handleSubmit, reset } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = bios.slice(firstIndex, lastIndex);
  const npage = Math.ceil(bios.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const nextPage = () => {
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  };
  const changePage = (id) => {
    setCurrentPage(id)
  };
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const onSubmit = async (data) => {
    

     const age= data.age;
     const gender= data.gender;
     const present_division = data.division;
    console.log(age, gender, present_division);
    if(age === "Femal"){
      // records.filter((item) => item.gender === "Femal");
      console.log("filter");
      
    }
    if(age === "Male"){
      const res = records.filter((item) => item.gender === "Male");
      console.log(res);
      
    }
    reset();
  };
  return (
    <div>
      <SectionTitle heading="All Biodata"></SectionTitle>
      <div className="flex gap-4">
        <div>
          <div className="max-w-md mx-auto mt-10 bg-white rounded-lg overflow-hidden">
            <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
              Search Biodata
            </div>
            <form className="py-4 px-6" onSubmit={handleSubmit(onSubmit)}>
             
              <div className="">
                <h3 className="mb-2">Age</h3>
                <select
                  {...register("age")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option selected disabled value="">
                    Select Age
                  </option>
                  <option value="20-30">20-30</option>
                  <option value="30-40">30-40</option>
                </select>
              </div>
              <div className="">
                <h3 className="mb-2">Types of Biodata</h3>
                <select
                  {...register("gender")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option selected disabled value="">
                    Select Sex
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="">
                <h3 className="mb-2">Division</h3>
                <select
                  {...register("division")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option selected disabled value="">
                    Select division
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattagram">Chattagram</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Maymansign">Maymansign</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>

              <div className="flex items-center justify-center mt-6 mb-4">
                <button
                  className="bg-gray-900 w-full text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="mb-10 gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-6 space-x-4">
              {records.map((bio) => (
                <div
                  key={bio._id}
                  className="bg-white mt-4 h-[100%] overflow-hidden shadow rounded-lg border mx-4 box"
                >
                  <div className="px-4 py-5 sm:px-6">
                    <div className="flex justify-between items-center">
                      <img
                        src={bio.image}
                        className="w-20 h-16 rounded-full"
                        alt=""
                      />
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Contact Details
                      </h3>
                      <Link to={`/details/${bio._id}`} className="text-sm font-medium text-gray-500">
                        View Details
                      </Link>
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
                          {bio.email}
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
                        <dt className="text-sm font-medium text-gray-500">
                          Age
                        </dt>
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
          <div className="flex justify-center mb-5 w-[100%]">
            <nav className="relative z-0 inline-flex flex-wrap -space-x-px rounded-md shadow-md">
              <a
                href="#"
                onClick={prePage}
                className="relative inline-flex items-center rounded-l-md p-2 text-sm text-gray-500 hover:bg-gray-200"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              {numbers.map((pages, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => changePage(index+1)}
                  className="relative inline-flex items-center text-sm text-gray-500 p-2 md:px-3 md:py-2 active:bg-violet-700
                   hover:bg-gray-200"
                >
                  {pages}
                </a>
              ))}
              <a
                href="#"
                onClick={nextPage}
                className="relative inline-flex items-center rounded-r-md p-2 text-sm text-gray-500 hover:bg-gray-200 "
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioDatas;
