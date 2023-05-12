import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className='h-full md:h-[550px] lg:w-1/2 relative'>
                    <img src={person} className="w-[250px] h-full md:w-[460px] md:h-[440px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 lg:w-[330px] absolute lg:h-[330px] -right-10 md:right-6 -bottom-12 md:bottom-5 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='h-550px lg:w-1/2 space-y-12 px-3'>
                    <h3 className='text-3xl font-bold text-red-500'>About us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className='text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-red-600 hover:bg-red-700 border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;