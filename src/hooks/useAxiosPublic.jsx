import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "bio.json"
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;