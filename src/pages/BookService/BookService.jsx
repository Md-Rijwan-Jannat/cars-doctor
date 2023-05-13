import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../ContaxtProvider/AuthProvider";
import { toast } from "react-hot-toast";

const BookService = () => {
    const bookingData = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, img, title, price } = bookingData;
    const bookingHandler = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const date = from.date.value;
        const email = user?.email;
        const price = from.price.value;
        const bookingInfo = {
            Booking_id: _id,
            img,
            service: title,
            customerName: name,
            date,
            email,
            price
        };
        console.log(bookingInfo);
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast.success("Confirm your booking");
                }
            })
    }
    return (
        <div>
            <Banner></Banner>
            <form onSubmit={bookingHandler} className="card-body bg-base-200 py-10 md:px-16 my-16 rounded-xl">
                <h2 className='text-3xl text-center font-bold text-gray-500 mb-12'>Service: {title}</h2>
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
                        <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={'$' + price} placeholder="price" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-red-500 hover:bg-red-600 border-none" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;