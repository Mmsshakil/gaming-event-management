import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';


const Register = () => {

    // for password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}$/;
    // error showing
    const [registerError, setRegisterError] = useState('');


    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, email, password);

        // reset error
        setRegisterError('');

        if (!passwordPattern.test(password)) {
            setRegisterError('Password must be atleast 6 characters, a capital letter, a special character');
            // console.log('password wrong');
            return;
        }

        // createuser
        createUser(email, password)
            .then(result => {
                console.log('user create success', result);
                swal("Success!", "You registration successful", "success");
            })
            .catch(error => {
                console.log(error.message);
            })


    }

    return (
        <div>

            <Navbar></Navbar>

            <div className=" w-full md:w-2/3 lg:w-1/2 mx-auto p-10 border border-emerald-500 ">
                <h2 className="text-xl font-semibold text-center">Please Register</h2>

                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        {
                            registerError && <p className="text-red-700 text-lg mb-3">{registerError}</p>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-3">Already have an account? Please <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            </div>

        </div>
    );
};

export default Register;