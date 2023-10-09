

import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import swal from 'sweetalert';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log('logout success', result);
                swal("Logout Success!", "", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const navLink = <>

        <li className='mr-1'> <NavLink to='/'>Home</NavLink></li>
        <li className='mr-1'> <NavLink to='/about'>About</NavLink></li>
        <li className='mr-1'> <NavLink to='/contact'>Contact</NavLink></li>

        {
            user && <>
                <li className='mr-1'> <NavLink to='/gallery'>Gallery</NavLink></li>
                <li className='mr-1'> <NavLink to='/report'>Report</NavLink></li>
            </>
        }


    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}

                    </ul>
                </div>
                <div className='w-16 lg:w-28'>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}

                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ?
                        <div className='flex justify-center items-center gap-2 '>
                            <div className=" flex justify-center items-center gap-2">
                                <img className="w-10 rounded-full" src={user.photoURL} />
                                <p className='text-xs lg:text-lg'>{user.displayName}</p>
                            </div>
                            <button onClick={handleSignOut} className='btn btn-outline btn-error'>Logout</button>

                        </div>
                        :
                        <Link to='/login'>
                            <button className='btn btn-outline btn-info'>Login</button>
                        </Link>

                }



            </div>
        </div>
    );
};

export default Navbar;