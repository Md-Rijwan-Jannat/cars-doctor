import Banner from "../Shared/Banner/Banner";

const Booking = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="card-body bg-base-200 py-10 md:px-16 my-16 rounded-xl">
                <h2 className='text-3xl text-center font-bold text-gray-500'>Booking</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name='name' placeholder="User Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">date</span>
                        </label>
                        <input type="date" name='date' placeholder="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input type="number" name='phone number' placeholder="phone number" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-red-500 hover:bg-red-600 border-none" type="submit" value="Order Confirm" />
                </div>
            </div>
        </div>
    );
};

export default Booking;