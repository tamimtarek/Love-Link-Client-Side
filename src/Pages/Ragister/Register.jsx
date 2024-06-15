
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import {useAuth} from "../../hooks/useAuth"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Register = () => {
  

  const {createUser, updateUserProfile} =useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
const {
  register,
  handleSubmit,
  reset,
  
} = useForm();
const onSubmit = (data) => {
  console.log(data);
  createUser(data.email, data.password)
  .then(res => {
      const user = res.user;
      console.log(user);
    updateUserProfile( data.name, data.photoURL)
      .then(()=>{
        const userInfo ={
          name: data.name,
          email: data.email
        }
        console.log(userInfo);
          axiosPublic.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log("user added to the data base")
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
          })
      })
      navigate("/")
      
  })
};

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Register Now</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit(onSubmit)} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="name"
                    name="name"
                    type="text"
                    {...register("name")}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Name"
                  />
                  <label
                    for="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    {...register("email")}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    for="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="photo"
                    name="photo"
                    type="text"
                    {...register("photo")}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Photo Url"
                  />
                  <label
                    for="photo"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Photo Url
                  </label>
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    {...register("password")}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button className="bg-cyan-500 text-white rounded-md px-2 py-1">
                    <input type="submit" value="Register" />
                  </button>
                </div>
                <p>Already Have an account ? <Link to="/login">Login</Link></p>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Register;
