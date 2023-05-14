import login from '../../assets/images/login/login.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../ContaxtProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import SocialLogin from '../Shared/SocailLogin/SocialLogin';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [show, setShow] = useState(false)
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const signUser = result.user;
                console.log(signUser);
                toast.success('Successfully Sign Up')
                from.reset('')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }
    return (
        <div className="hero my-24">
            <div className="hero-content w-full flex-col justify-center lg:flex-row">
                <div className="lg:content-left md:w-1/3">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 md:w-1/2 md:ml-12 border bg-base-100 p-5">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h2 className='text-3xl text-center font-bold text-gray-500'>Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                            <input className="btn bg-red-500 hover:bg-red-600 border-none" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>

                    <p className='text-center my-10'>You have a account? Please <Link className='text-red-600 font-bold' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;