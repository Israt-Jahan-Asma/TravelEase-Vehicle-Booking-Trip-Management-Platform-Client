import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
const Login = () => {
    const { signIn, signInWithGoogle } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const googleProvider = new GoogleAuthProvider()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value


        signIn(email, password)
            .then(result => {
                const user = result.user
                toast.success('You have login successfully!')
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage)
                setError(errorCode, errorMessage)
            })
    }
    const handleForget = () => {
        navigate('/forget-password', { state: { email } })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {

                toast.success('You have login successfully!')
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {

                toast.error(error.message)

            })
    }
    return (
        <div className=' flex justify-center max-h-screen items-center py-10 card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto my-10'>
            <div className="card-body space-y-5">
                <h2 className=' text-accent text-center'>Login Your Account</h2>
                <form className='w-80 mx-auto' onSubmit={handleLogin}>

                    <fieldset className="fieldset relative">

                        <label className="label">Email</label>
                        <input onChange={e => { setEmail(e.target.value) }} value={email} name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label ">Password</label>
                        <input name='password'
                            type={show ? 'text' : 'password'}

                            className="input " placeholder="Password" required />
                        <span onClick={() => setShow(!show)} className='absolute  top-28 right-3 z-10 '>
                            {
                                show ? <LuEye className=' h-4 w-4' /> : <LuEyeClosed className=' h-4 w-4' />
                            } </span>

                        {
                            error && <p className='text-secondary'> {error}</p>
                        }

                        <button onClick={handleForget} className='text-accent text-left underline cursor-pointer'>Forget Password? Click Here</button>


                        <button type='submit' className="btn btn-secondary mt-4">Login</button>
                        {/* divider */}
                        <div className='flex items-center justify-center gap-2 my-3'>
                            <div className='h-px w-20 bg-secondary '></div>
                            <span>or</span>
                            <div className='h-px w-20 bg-secondary '></div>
                        </div>
                        {/* google login code  */}
                        <button className='btn btn-primary flex items-center justify-center gap-3 cursor-pointer'
                            type='button'
                            onClick={handleGoogleSignIn}>
                            <FaGoogle className='w-5 h-5 text-secondary' />
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