import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div>
            <div className="carousel lg:h-[750px] w-full rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 p-2 lg:p-12 2/5 lg:w-1/3">
                            <h1 className="text-3xl lg:text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-sm lg:text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex">
                                <button className="btn bg-red-600 hover:bg-red-700 border-none mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform lg:-translate-y-1/2 lg:left-5 right-0 top-24 lg:right-5 bottom-0">
                        <a href="#slide4" className="bg-gray-600 bg-opacity-70 text-white flex justify-center items-center hover:bg-red-600 btn-circle mr-7">
                            <FaArrowLeft></FaArrowLeft>
                        </a>
                        <a href="#slide2" className="bg-gray-600 bg-opacity-70 text-white flex justify-center items-center hover:bg-red-600 btn-circle">
                            <FaArrowRight></FaArrowRight>
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 p-2 lg:p-12 2/5 lg:w-1/3">
                            <h1 className="text-3xl lg:text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-sm lg:text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex">
                                <button className="btn bg-red-600 hover:bg-red-700 border-none mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform lg:-translate-y-1/2 lg:left-5 right-0 top-24 lg:right-5 bottom-0">
                        <a href="#slide1" className="bg-gray-600 bg-opacity-70 text-white flex justify-center items-center hover:bg-red-600 btn-circle mr-7">
                            <FaArrowLeft></FaArrowLeft>
                        </a>
                        <a href="#slide3" className="bg-gray-600 bg-opacity-70 text-white flex justify-center items-center hover:bg-red-600 btn-circle">
                            <FaArrowRight></FaArrowRight>
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 p-2 lg:p-12 2/5 lg:w-1/3">
                            <h1 className="text-3xl lg:text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-sm lg:text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex">
                                <button className="btn bg-red-600 hover:bg-red-700 border-none mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform lg:-translate-y-1/2 lg:left-5 right-0 top-24 lg:right-5 bottom-0">
                        <a href="#slide2" className="bg-gray-600 bg-opacity-70 text-white flex justify-center items-center hover:bg-red-600 btn-circle mr-7">
                            <FaArrowLeft></FaArrowLeft>
                        </a>
                        <a href="#slide4" className="bg-gray-600 bg-opacity-70 text-white flex justify-center items-center hover:bg-red-600 btn-circle">
                            <FaArrowRight></FaArrowRight>
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute h-full flex items-center left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 p-2 lg:p-12 2/5 lg:w-1/3">
                            <h1 className="text-3xl lg:text-7xl font-bold">Affordable Price For Car Servicing</h1>
                            <p className="text-sm lg:text-lg">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex">
                                <button className="btn bg-red-600 hover:bg-red-700 border-none mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform lg:-translate-y-1/2 lg:left-5 right-0 top-24 lg:right-5 bottom-0">
                        <a href="#slide3" className="bg-gray-600 bg-opacity-70 text-white flex justify-center items-center hover:bg-red-600 btn-circle mr-7">
                            <FaArrowLeft></FaArrowLeft>
                        </a>
                        <a href="#slide1" className="bg-gray-600 bg-opacity-70 text-white flex justify-center items-center hover:bg-red-600 btn-circle mr-7">
                            <FaArrowRight></FaArrowRight>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;