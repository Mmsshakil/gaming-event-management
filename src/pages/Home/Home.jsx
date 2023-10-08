import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import ServiceCard from "./ServiceCard";


const Home = () => {

    const service = useLoaderData();
    console.log(service);

    return (
        <div>

            <Header></Header>
            <div className="grid grid- grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
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
            {/* extra part */}
            <div className=" border rounded-md mx-auto py-14 mt-10">
                <h2 className="text-center text-xl font-semibold text-white">Do you have any <span className="text-emerald-500 font-bold">Question</span> ?</h2>
                <form className="w-2/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Name</span>
                        </label>
                        <input type="text" name="email" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">What is your Question ?</span>
                        </label>
                        <textarea className="p-5 bg-transparent border rounded-lg"
                            name="postContent"
                            placeholder="Type here . . . . "
                            rows={3}
                            cols={40}
                        />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Home;