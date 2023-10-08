import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import ServiceCard from "./ServiceCard";
import Footer from "../shared/Footer/Footer";

const Home = () => {

    const service = useLoaderData();
    console.log(service);

    return (
        <div>

            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div className="col-span-1 mt-0  rounded-md ">
                    
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* services */}
                <div className="md:col-span-3 lg:col-span-3  mx-auto">
                    <h2 className="text-2xl font-bold font-nunito text-center my-5 text-white">Our Services</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-6 lg:gap-10 pt-0 ">
                        {
                            service?.map(aService => <ServiceCard key={aService.id} service={aService}></ServiceCard>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;