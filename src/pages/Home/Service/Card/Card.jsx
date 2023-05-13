import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ service }) => {
    const { _id,img, price, title } = service;
    return (
        <div className="card bg-base-100 shadow-xl btn w-full h-full hover:bg-base-100 border-none">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[300px] h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-gray-600 text-2xl">{title}</h2>
                <div className="flex justify-around items-center">
                    <p className="text-red-600 text-xl mr-5"><span className="font-bold">Price:</span> {price}</p>
                    <Link to={`/book/${_id}`} className="btn bg-white hover:bg-red-300 border-none rounded-lg h-10 text-red-600 font-bold p-2 flex justify-end gap-2">Service <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;