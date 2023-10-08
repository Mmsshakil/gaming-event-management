import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // signin
        signIn(email, password)
            .then(result => {
                console.log('login sucess', result);
                swal("Login Success!", "", "success");
                navigate(location?.state ? location.state : '/' );
            })
            .catch(error => {
                console.log(error.message);
                swal("Login Faild!", "Invalid Mail or Password", "error");
            })
    }

    return (
        <div>


            <div className=" w-full md:w-2/3 lg:w-1/2 mx-auto p-10 border border-emerald-500 ">
                <h2 className="text-xl font-semibold text-center text-white">Please Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-3">Do not have an account? Please <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;