import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://love-link-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;