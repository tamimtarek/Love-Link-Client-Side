import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useFavourits from "../../hooks/useFavourits";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Favourits = () => {
  const [favourit, refetch] = useFavourits();
  const axiosSecure = useAxiosSecure()
  console.log(favourit);
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
          axiosSecure.delete(`/favourits/${id}`).then((res) => {
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
  return (
    <div className="flex flex-col">
      <div>
        <SectionTitle
          heading="my favourit"
          subHeading="Selected Persion"
        ></SectionTitle>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Biodata Id
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Permanent Adress
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Occupation
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Delete Bio
                  </th>
                </tr>
              </thead>
              {favourit.map((bio, index) => (
                <tbody key={bio._id}>
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {bio.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {bio._id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {bio.present_division}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {bio.occupation}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                      onClick={()=>handleDelete(bio._id)}
                        href="#"
                       
                        className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourits;
