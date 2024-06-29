import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      return res.data;
    },
  });
  const handleDelete = (id) =>{
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
  }
  console.log(users);
  return (
    <div className="container flex flex-col items-center justify-center w-full mx-auto">
      <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          User database
        </h3>
        <p className="max-w-2xl mt-1 text-sm text-gray-500">
          Details and informations about user.
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-5">
        {
          users.map(user=><li key={user._id} className="flex flex-row mb-2 border-gray-400">
            <div className="shadow border select-none cursor-pointer bg-white rounded-md flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-gray-600">{user.email}</div>
              </div>
              <div ><button
                      onClick={()=>handleDelete(user._id)}
                        href="#"
                       
                        className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        Delete
                      </button></div>
            </div>
          </li>)
        }
      </ul>
    </div>
  );
};

export default ManageUser;
