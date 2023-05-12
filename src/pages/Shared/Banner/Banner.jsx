import banner from '../../../assets/images/checkout/checkout.png';
const Banner = () => {
    return (
        <div className='relative w-full rounded-xl'>
            <img className='w-full h-full ' src={banner} alt="" />
            <div className='rounded-xl absolute h-full flex items-center left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                <h1 className='text-3xl font-bold ml-10 text-white'>Check Out</h1>

            </div>
            <div className='flex justify-center  absolute bottom-0 w-full '>
                <h3 className='bg-red-600 w-1/5 text-center text-white p-3 text-xl rounded-2xl'>Home/service</h3>
            </div>
        </div>
    );
};

export default Banner;