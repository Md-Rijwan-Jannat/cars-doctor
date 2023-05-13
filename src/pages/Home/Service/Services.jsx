import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    }, [])
    return (
        <div>
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-red-600">Service</h3>
                <h1 className="text-6xl ">Our Service Area</h1>
                <p className='text-gray-500'>the majority have suffered alteration in some form, by injected humour, or <br/>randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                   services.map(service => <Card
                   key={service._id}
                   service={service}
                   ></Card>)
                }
            </div>
        </div>
    );
};

export default Service;