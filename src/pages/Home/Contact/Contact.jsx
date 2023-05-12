import { FaCalendarMinus, FaPhoneVolume, FaSearchLocation } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="md:flex  space-y-5 justify-around items-center bg-base-200 px-5 py-10 w-full my-10">
            <div className="flex gap-3 items-center">
                <FaCalendarMinus className="text-red-600 text-3xl btn bg-base-200 hover:bg-red-100` border-none w-16 p-2"></FaCalendarMinus>
                <div>
                   <small className="mb-0"> <p>We are open monday-friday</p></small><br/>
                    <h3 className="text-2xl">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <FaPhoneVolume className="text-red-600 text-3xl btn bg-base-200 hover:bg-red-100 border-none w-16 p-2"></FaPhoneVolume>
                <div>
                   <small className="mb-0"> <p>Have a question?</p></small><br/>
                    <h3 className="text-2xl">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <FaSearchLocation className="text-red-600 text-3xl btn bg-base-200 hover:bg-red-100 border-none w-16 p-2"></FaSearchLocation>
                <div>
                   <small className="mb-0"> <p>Need a repair? our address</p></small><br/>
                    <h3 className="text-2xl">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;