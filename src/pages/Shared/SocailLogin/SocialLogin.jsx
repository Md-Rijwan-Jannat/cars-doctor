import { useContext } from "react";
import { AuthContext } from "../../../ContaxtProvider/AuthProvider";
import { toast } from "react-hot-toast";


const SocialLogin = () => {
const {google} = useContext(AuthContext);
    
    const googleHandler = () => {
        google()
            .then(result => {
                const signUser = result.user;
                console.log(signUser);
                toast.success('Successfully login with google')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }
    return (
        <div className='text-center'>
            <p className='text-gray-500'>or sign up with</p>
            <div className='flex gap-3 my-5 justify-center items-center'>
                <img className='btn bg-base-200 border-none hover:bg-red-300 p-2 w-12' src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                <img className='btn bg-base-200 border-none hover:bg-red-300 p-2 w-10 h-8' src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" />
                <img onClick={googleHandler} className='btn bg-base-200 border-none hover:bg-red-300 p-2 w-10' src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" />
            </div>
        </div>

    );
};

export default SocialLogin;