import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth'; 
import { toast } from 'react-toastify';

const Login = () => {

    const { signInUser, signInWithGoogle, resetPassword } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const googleProvider = new GoogleAuthProvider()

    // Email/Password Login 
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value


        signInUser(email, password)
            .then(result => {
                toast.success('You have login successfully!')
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                setError(errorMessage)
            })
    }

    // Forget Password 
    const handleForget = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email first!");
            return;
        }
        try {
            await resetPassword(email);
            toast.success("Password reset email sent! Check your inbox.");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = () => {
        
        signInWithGoogle(googleProvider)
            .then(() => {
                
                toast.success('You have login successfully!')
               
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
               
                toast.error(error.message)
                setError(error.message)
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center py-10">
            <div className="card shadow-xl bg-base-100 p-8 text-base-content">
                <h2 className='text-center text-2xl font-bold'>Login Your Account</h2>
                <form className='w-80 mx-auto' onSubmit={handleLogin}>

                    <fieldset className="fieldset relative">

                        <label className="label">Email</label>
                        <input onChange={e => { setEmail(e.target.value) }} value={email} name='email' type="email" className="input input-bordered w-full" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name='password'
                            type={show ? 'text' : 'password'}
                            className="input input-bordered w-full" placeholder="Password" required />
                        <span onClick={() => setShow(!show)} className='absolute top-[11.2rem] right-3 z-10 cursor-pointer'>
                            {
                                show ? <LuEye className=' h-4 w-4' /> : <LuEyeClosed className=' h-4 w-4' />
                            } </span>

                        {
                            error && <p className='text-error mt-2'> {error}</p> // Use semantic error color
                        }

                        <button onClick={handleForget} className='text-accent text-left underline cursor-pointer mt-2'>Forget Password? Click Here</button>


                        <button type='submit' className="btn btn-secondary mt-4 w-full">Login</button>
                        {/* divider */}
                        <div className='flex items-center justify-center gap-2 my-3'>
                            <div className='h-px w-20 bg-base-300'></div>
                            <span>or</span>
                            <div className='h-px w-20 bg-base-300'></div>
                        </div>
                        {/* google login code  */}
                        <button className='btn btn-primary flex items-center justify-center gap-3 cursor-pointer w-full'
                            type='button'
                            onClick={handleGoogleSignIn}>
                            <FaGoogle className='w-5 h-5 text-base-content' />
                            Continue with Google
                        </button>

                        <p className='text-center pt-5'>Don't Have an Account? <Link className='text-accent' to='/register'> Register</Link></p>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;