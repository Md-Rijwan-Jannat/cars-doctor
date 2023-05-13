import banner from '../../../assets/images/checkout/checkout.png';

const Banner2 = () => {
    return (
        <div className='relative w-full rounded-xl'>
            <img className='w-full h-full ' src={banner} alt="" />
            <div className='rounded-xl absolute h-full flex items-center left-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                <h1 className='text-3xl font-bold ml-10 text-white'>Manage All Orders</h1><br />
            </div>
            <div className='rounded-xl absolute h-full flex items-center left-0  -bottom-7'>
                <p className='text-red-600 ml-10'>Home - Manage All Orders</p>
            </div>
        </div>
    );
};

export default Banner2;