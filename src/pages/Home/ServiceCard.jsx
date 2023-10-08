import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { img, title, details } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-md">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                    details.length > 70
                        ?
                        <p>{details.slice(0, 70)} <Link className="text-blue-600 font-semibold">Read More...</Link></p>
                        :
                        <p>{details}</p>
                }

                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;