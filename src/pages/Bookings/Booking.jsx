import { FaChevronDown, FaTimesCircle } from "react-icons/fa";

const Booking = ({ booking, deleteHandler, handleApprovedBooking }) => {
    console.log(booking);
    const { _id, img, price, service, date, email, status } = booking;

    return (
        <tr>
            <th>
                <label onClick={() => deleteHandler(_id)} className="btn w-full md:w-16 bg-white text-green-500 border-green-500 hover:bg-base-200 hover:border-none text-3xl ">
                    <FaTimesCircle />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-5">
                    <div className="avatar">
                        <div className="w-16 h-16 md:w-[150px] md:h-[150px] rounded-xl">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <span className="font-bold">{service}</span>
            </td>
            <td>
                <span>{email}</span>
            </td>
            <td>
                <span>{price}</span>
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ?
                        <button onClick={() => handleApprovedBooking(_id)} className="btn btn-ghost text-red-500 border-red-500 ">Confirmed</button> :

                        <button onClick={() => handleApprovedBooking(_id)} className="btn btn-ghost text-green-500 border-green-500 ">Approved <FaChevronDown className="ml-2 font-normal" /></button>
                }
            </th>
        </tr>
    );
};

export default Booking;