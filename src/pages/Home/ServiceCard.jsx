import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { img, title, details, id } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-md">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>

                {
                    details?.length > 90
                        ?
                        <p>{details?.slice(0, 90)}.......</p>
                        :
                        <p>{details}</p>
                }

                <div className="card-actions justify-center mt-2">
                    <Link to={`/service/${id}`} className="text-blue-600 font-semibold"><button className="btn btn-outline btn-info">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;