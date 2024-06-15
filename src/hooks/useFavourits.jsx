import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useFavourits = () => {
 
        const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: cart=[]} = useQuery({
        queryKey: ['favourits', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/favourits?email=${user.email}`);
            return res.data
        }
    })
    return [cart, refetch]
    
};

export default useFavourits;