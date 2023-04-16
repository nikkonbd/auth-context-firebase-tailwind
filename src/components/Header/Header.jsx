import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Powerbase</a>
                <div>
                    <Link className='btn btn-ghost normal-case text-xl' to={'/'}>Home</Link>
                    {user && <Link className='btn btn-ghost normal-case text-xl' to={'/orders'}>Orders</Link>}
                    {user && <Link className='btn btn-ghost normal-case text-xl' to={'/profile'}>Profile</Link>}
                    <Link className='btn btn-ghost normal-case text-xl' to={'/login'}>Login</Link>
                    <Link className='btn btn-ghost normal-case text-xl' to={'/register'}>Register</Link>
                    {
                        user ?
                            <>
                                <span>{user.email}</span>
                                <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
                            </> : ''
                    }
                    {/* <Link to={'/login'}>Login</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;