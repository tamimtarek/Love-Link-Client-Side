import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_imageBB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const PostBio = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imagebb and then get an url
    const imageFile = { image: data.profile_image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    if (res.data.success) {
      const bioDetail = {
    
        name: data.name,
        father_name: data.fathers_name,
        mother_name: data.mothers_name,
        age: data.age,
        expected_partner_age: data.expected_partner_age,
        expected_partner_height: data.expected_partner_height,
        expected_partner_weight: data.expected_partner_weight,
        date_of_birth: data.date_of_birth,
        occupation: data.occupation,
        race: data.race,
        height: data.height,
        weight: data.weight,
        gender: data.gender,
        mobile_number: data.mobile_number,
        email: data.email,
        permanent_division: data.permanent_division,
        present_division: data.present_division,
        image: res.data.data.display_url,
      };
      console.log(bioDetail);
      const bios = await axiosPublic.post("/bio", bioDetail);
      console.log(bios);
      if (bios.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Biodata Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      reset();
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      {/* <!-- Author: FormBold Team --> */}
      <div className="mx-auto w-full bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* sex and name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <h3 className="mb-2">Sex</h3>
              <select
                {...register("gender", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option selected disabled value="">
                  Select Sex
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          {/* image and date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-5">
              <label
                for="image"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Image
              </label>
              <input
                {...register("profile_image", { required: true })}
                type="file"
                name="profile_image"
                id="image"
                placeholder="image"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Date of Birth
              </label>
              <input
                {...register("date_of_birth", { required: true })}
                type="date"
                name="date_of_birth"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          {/* height and weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <h3 className="mb-2">Height</h3>
              <select
                {...register("height", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option selected disabled value="">
                  Select Height
                </option>
                <option value="4.8">4.8</option>
                <option value="5.00">5.00</option>
                <option value="5.02">5.02</option>
                <option value="5.03">5.03</option>
                <option value="5.04">5.04</option>
                <option value="5.05">5.05</option>
                <option value="5.06">5.06</option>
                <option value="5.07">5.07</option>
                <option value="5.08">5.08</option>
                <option value="5.09">5.09</option>
                <option value="5.10">5.10</option>
                <option value="5.11">5.11</option>
                <option value="6.00">6.00</option>
              </select>
            </div>
            <div className="">
              <h3 className="mb-2">Weight</h3>
              <select
                {...register("weight", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option selected disabled value="">
                  Select Weight
                </option>
                <option value="48kg">48kg</option>
                <option value="50kg">50kg</option>
                <option value="52kg">52kg</option>
                <option value="54kg">54kg</option>
                <option value="56kg">56kg</option>
                <option value="58kg">58kg</option>
                <option value="60kg">60kg</option>
                <option value="65kg">65kg</option>
                <option value="68kg">68kg</option>
                <option value="70kg">70kg</option>
                <option value="75kg">75kg</option>
                <option value="77kg">77kg</option>
                <option value="80kg">80kg</option>
              </select>
            </div>
          </div>
          {/* race and occupation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <h3 className="mb-2">Race</h3>
              <select
                {...register("race", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option selected value="" disabled>
                  Select race
                </option>
                <option value="Asian">Asian</option>
                <option value="Black or African American">
                  Black or African American
                </option>
                <option value="Hispanic or Latino">Hispanic or Latino</option>
                <option value="Native American">Native American</option>
                <option value="Native Hawaiian or Pacific Islander">
                  Native Hawaiian or Pacific Islander
                </option>
              </select>
            </div>
            <div className="mb-5">
              <h3 className="mb-2">Occupation</h3>
              <select
                {...register("occupation", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option disabled value="">
                  Select Occupation
                </option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="Engineer">Engineer</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Architect">Architect</option>
                <option value="Journalist">Journalist</option>
                <option value="Civil Servant">Civil Servant</option>
                <option value="Businessman">Businessman</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Web Developer">Web Developer</option>
              </select>
            </div>
          </div>
          {/* F and M Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-5">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Fathers Name
              </label>
              <input
                {...register("fathers_name", { required: true })}
                type="text"
                name="fathers_name"
                id="fathe_name"
                placeholder="Fathers Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Mothers Name
              </label>
              <input
                {...register("mothers_name", { required: true })}
                type="text"
                name="mothers_name"
                id="mname"
                placeholder="Mothers Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          {/* Division */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <h3 className="mb-2">Permanent Division Name</h3>
              <select
                {...register("permanent_division", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option selected disabled value="">
                  Select Permanent Division
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
            <div className="">
              <h3 className="mb-2">Present Division Name</h3>
              <select
                {...register("present_division", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option selected disabled value="">
                  Select Present Division
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
          </div>
          {/* Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-5">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Age
              </label>
              <input
                {...register("age", { required: true })}
                type="text"
                name="age"
                id="age"
                placeholder="Age"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Expected Partner Age
              </label>
              <input
                {...register("expected_partner_age", { required: true })}
                type="text"
                name="expected_partner_age"
                id="page"
                placeholder="Expected Partner Age"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          {/* Partner H and W */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <h3 className="mb-2">Expected Partner Height</h3>
              <select
                {...register("expected_partner_height", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option selected disabled value="">
                  Select Expected Partner Height
                </option>
                <option value="4.8">4.8</option>
                <option value="5.00">5.00</option>
                <option value="5.02">5.02</option>
                <option value="5.03">5.03</option>
                <option value="5.04">5.04</option>
                <option value="5.05">5.05</option>
                <option value="5.06">5.06</option>
                <option value="5.07">5.07</option>
                <option value="5.08">5.08</option>
                <option value="5.09">5.09</option>
                <option value="5.10">5.10</option>
                <option value="5.11">5.11</option>
                <option value="6.00">6.00</option>
              </select>
            </div>
            <div className="">
              <h3 className="mb-2">Expected Partner Weight</h3>
              <select
                {...register("expected_partner_weight", { required: true })}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option selected disabled value="">
                  Select Expected Partner Weight
                </option>
                <option value="48kg">48kg</option>
                <option value="50kg">50kg</option>
                <option value="52kg">52kg</option>
                <option value="54kg">54kg</option>
                <option value="56kg">56kg</option>
                <option value="58kg">58kg</option>
                <option value="60kg">60kg</option>
                <option value="65kg">65kg</option>
                <option value="68kg">68kg</option>
                <option value="70kg">70kg</option>
                <option value="75kg">75kg</option>
                <option value="77kg">77kg</option>
                <option value="80kg">80kg</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-5">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Contact Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                defaultValue={user.email}
                placeholder={user.email}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Mobile Number
              </label>
              <input
                {...register("mobile_number", { required: true })}
                type="text"
                name="mobile_number"
                id="phone"
                placeholder="Mobile Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="mt-7">
            <button className="relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Save And Publish Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBio;
