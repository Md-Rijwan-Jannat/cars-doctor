import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
const SignUp = () => {
    const handleSignUp = event=>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email,password)

        createUser(email, password)
        .then(result=>{
            const signUser = result.user;
            console.log(signUser);
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero my-24">
            <div className="hero-content w-full flex-col justify-center lg:flex-row">
                <div className="lg:content-left w-1/3">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 md:ml-12 border bg-base-100 p-6">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h2 className='text-3xl text-center font-bold text-gray-500'>Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Confirm password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-red-500 hover:bg-red-600 border-none" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p className='text-gray-500'>or sign up with</p>
                        <div className='flex gap-3 my-5 justify-center items-center'>
                            <img className='btn bg-base-200 border-none hover:bg-red-300 p-2 w-12' src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                            <img className='btn bg-base-200 border-none hover:bg-red-300 p-2 w-10 h-8' src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" />
                            <img className='btn bg-base-200 border-none hover:bg-red-300 p-2 w-10' src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" />
                        </div>
                            <p className='text-center my-10'>Have an account? <Link className='text-red-600 font-bold' to={'/login'}>Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;