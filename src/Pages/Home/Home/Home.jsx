
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Biodata from "../Biodata/Biodata"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Home = () => {
    const [bios, setBios] = useState([]);
    useEffect(()=>{
        fetch("bio.json")
        .then(res => res.json())
        .then(data => setBios(data))
    },[])
    console.log(bios);
    return (
        <div>
           <div className="mb-6"> <Banner></Banner></div>
           <div>
            <SectionTitle subHeading="Fine Your Partner" heading="Explore"></SectionTitle>
           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 mb-5 lg:grid-cols-3 gap-4">
                {
                    bios.slice(0,6).map(bio =><Biodata key={bio._id} bio={bio}></Biodata>)
                }
            </div>
           </div>

           <div>
            <SectionTitle heading="Success Couple" ></SectionTitle>

           </div>
        </div>
    );
};

export default Home;