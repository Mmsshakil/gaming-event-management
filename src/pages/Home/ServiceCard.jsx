import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServiceCard = ({ service }) => {

    useEffect(() =>{
        AOS.init({duration: "1000"})
    },[])

    const { img, title, details, id } = service;

    return (
        <div data-aos="fade-up" className="card card-compact w-96 bg-base-100 shadow-xl rounded-md">
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