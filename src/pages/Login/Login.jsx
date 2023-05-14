import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../ContaxtProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import SocialLogin from '../Shared/SocailLogin/SocialLogin';
const Login = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { loginUser } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const signUser = result.user;
                console.log(signUser);
                navigate(from, { replace: true })
                toast.success('Successfully login')
                form.reset('')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }
    return (
        <div className="hero my-24">
            <div className="hero-content w-full flex-col justify-center lg:flex-row-reverse">
                <div className="lg:content-left md:w-1/3">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 md:w-1/2 md:ml-12 border bg-base-100 p-5">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className='text-3xl text-center font-bold text-gray-500'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'} name='password' placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <a href="#" onClick={() => setShow(!show)} className="label-text-alt link link-hover">{
                                    show ? <p>Hide password</p> : <p>Show password</p>
                                }</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-red-500 hover:bg-red-600 border-none" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    
            <p className='text-center my-10'>You have no account? Please <Link className='text-red-600 font-bold' to={'/signUp'}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;