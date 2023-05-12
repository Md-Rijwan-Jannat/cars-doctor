import feature1 from '../../../assets/icons/check.svg'
import feature2 from '../../../assets/icons/deliveryt.svg'
import feature3 from '../../../assets/icons/Group 38729.svg'
import feature4 from '../../../assets/icons/group.svg'
import feature5 from '../../../assets/icons/person.svg'
import feature7 from '../../../assets/icons/Wrench.svg'
const Features = () => {
    return (
        <div>
             <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-red-600">Core Features</h3>
                <h1 className="text-6xl ">Why Choose Us</h1>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br /> do not look even slightly believable.  </p>
            </div>
            <div className='md:flex space-y-5 md:justify-around my-12'>
                <div className="bg-base-200 grid justify-center items-center p-5 space-y-3 rounded-lg ">
                    <img src={feature4} alt="" />
                    <p className='text-gray-500 text-lg'>Expert Team</p>
                </div>
                <div className="bg-base-200 grid justify-center items-center p-5 space-y-3 rounded-lg ">
                    <img src={feature3} alt="" />
                    <p className='text-gray-500 text-lg'>Timely Delivery</p>
                </div>
                <div className="bg-base-200 grid justify-center items-center p-5 space-y-3 rounded-lg ">
                    <img src={feature5} alt="" />
                    <p className='text-gray-500 text-lg'>24/7 Support</p>
                </div>
                <div className="bg-base-200 grid justify-center items-center p-5 space-y-3 rounded-lg ">
                    <img src={feature7} alt="" />
                    <p className='text-gray-500 text-lg'>Best Equipment</p>
                </div>
                <div className="bg-base-200 grid justify-center items-center p-5 space-y-3 rounded-lg ">
                    <img src={feature1} alt="" />
                    <p className='text-gray-500 text-lg'>100% Guranty</p>
                </div>
                <div className="bg-base-200 grid justify-center items-center p-5 space-y-3 rounded-lg ">
                    <img src={feature2} alt="" />
                    <p className='text-gray-500 text-lg'>Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;