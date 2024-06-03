import img1 from "../../../assets/img5.jpg";

const Banner = () => {
  return (
    <div className="relative h-[560px] bg-gradient-to-r from-purple-600 to-blue-600   text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={img1}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Welcome to Love Link
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Explore this Amazing Platform and find your Life pertner and Happy to live
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Banner;
