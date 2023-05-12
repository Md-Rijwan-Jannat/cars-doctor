import img1 from "../../../assets/images/products/1.png"
import img2 from "../../../assets/images/products/2.png"
import img3 from "../../../assets/images/products/3.png"
import img4 from "../../../assets/images/products/4.png"
import img5 from "../../../assets/images/products/5.png"
import img6 from "../../../assets/images/products/6.png"
const Products = () => {
    return (
        <div className="my-24">
             <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-red-600">Popular products</h3>
                <h1 className="text-6xl ">Browse Our Products</h1>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which <br /> do not look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="card bg-base-100 shadow-xl my-10 btn w-full h-full hover:bg-base-100 border-none">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl bg-base-200 py-6 px-12 h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-gray-500 font-bold">Car Engine Plug</h2>
                        <p className="text-red-600 font-bold">$: 20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl my-10 btn w-full h-full hover:bg-base-100 border-none">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl bg-base-200 py-6 px-12 h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-gray-500 font-bold">Car Engine Plug</h2>
                        <p className="text-red-600 font-bold">$: 20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl my-10 btn w-full h-full hover:bg-base-100 border-none">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl bg-base-200 py-6 px-12 h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-gray-500 font-bold">Car Engine Plug</h2>
                        <p className="text-red-600 font-bold">$: 20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl my-10 btn w-full h-full hover:bg-base-100 border-none">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl bg-base-200 py-6 px-12 h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-gray-500 font-bold">Car Engine Plug</h2>
                        <p className="text-red-600 font-bold">$: 20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl my-10 btn w-full h-full hover:bg-base-100 border-none">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl bg-base-200 py-6 px-12 h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-gray-500 font-bold">Car Engine Plug</h2>
                        <p className="text-red-600 font-bold">$: 20.00</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl my-10 btn w-full h-full hover:bg-base-100 border-none">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl bg-base-200 py-6 px-12 h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2 className="card-title text-gray-500 font-bold">Car Engine Plug</h2>
                        <p className="text-red-600 font-bold">$: 20.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;