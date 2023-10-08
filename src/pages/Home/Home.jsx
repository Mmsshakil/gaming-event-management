import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div className="col-span-1 border-double border-4 border-emerald-900 rounded-md">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-3 lg:col-span-3 border">
                    <h2 className="text-2xl font-bold font-nunito">this is home</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;