import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContaxtProvider/AuthProvider";
import Banner2 from "../Shared/Banner/Banner2";
import Booking from "./Booking";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    console.log(bookings)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const url = `https://cars-doctor-server0.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data=>{
                if(!data.error){
                    setBookings(data)
                }
                else{
                    navigate('/')
                }
            })
    }, [url])
    const deleteHandler = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://cars-doctor-server0.vercel.app/bookings/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== _id);
                            setBookings(remaining);
                        }
                    })
            }
        })
    }
    const handleApprovedBooking = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to update this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://cars-doctor-server0.vercel.app/bookings/${_id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": " application/json"
                    },
                    body: JSON.stringify({ status: 'confirm' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your booking has been updated.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== _id);
                            const updated = bookings.find(booking => booking._id === _id);
                            updated.status = 'confirm';
                            const newBookings = [updated, ...remaining];
                            setBookings(newBookings);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Banner2></Banner2>
            <div className="overflow-x-auto w-full my-24">
                <table className="table w-full">
                    <thead>
                        <tr className="py-5">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Service</th>
                            <th>Email </th>
                            <th>Price </th>
                            <th>Date </th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <Booking
                                key={booking._id}
                                booking={booking}
                                deleteHandler={deleteHandler}
                                handleApprovedBooking={handleApprovedBooking}
                            ></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;