import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="conatainer mx-auto max-w-7xl font-nunito">
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;