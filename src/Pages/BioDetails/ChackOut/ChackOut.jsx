import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ChackOut = () => {
    const {user} = useAuth();
    console.log(user);
    const {id} = useParams();
    console.log(id);
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const handleSubmit = e =>{
        const form = e.target;
        const bioId = form.bioId.value;
        const email =  form.email.value;
        const card = form.card.value;
        console.log(bioId, email, card);
        navigate(from, {replace: true});
    }
  return (
    <div className="flex justify-center items-center mb-8">
      <div className=" py-6 px-8  mt-20 bg-white rounded shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label for="bioId" className="block text-gray-800 font-bold">
              Biodata Id:
            </label>
            <input
              type="text"
              name="bioId"
              disabled
              id="bioId"
              placeholder={id}
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <div>
            <label for="email" className="block text-gray-800 font-bold">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              disabled
              placeholder={user.email}
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
            
          </div>
          <div>
            <label for="card" className="block text-gray-800 font-bold">
              Steipe Card Number:
            </label>
            <input
              type="text"
              name="card"
              id="card"
              placeholder="Card Number"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
            
          </div>
          <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChackOut;
