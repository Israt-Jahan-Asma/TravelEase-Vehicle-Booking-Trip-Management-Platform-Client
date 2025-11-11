import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {
    const [passwordError, setPasswordError] = useState('');
    const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext)
    const [show, setShow] = useState(false)
    const googleProvider = new GoogleAuthProvider()

    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        // pass validation 
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter.');
            return;
        }

        createUser(email, password)
            .then(result => {
                // update profile with name + photo
                return updateUser({ displayName: name, photoURL: photo });
            })
            .then(() => {
                toast.success('Registration successfully done!');
                form.reset();
                navigate('/');
            })

            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode)
                setPasswordError(errorCode)
            })
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
        <div className='px-4 '>
            <div className="card-body space-y-5 flex flex-1 py-10 w-full max-w-md shrink-0 shadow-2xl rounded-xl mx-auto my-10 ">
                <h2 className=' text-accent text-center'>Register Your Account</h2>
                <form className='w-80 mx-auto ' onSubmit={handleRegister}>

                    <fieldset className="fieldset relative">

                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" required placeholder="Name" />

                        {/* photo url */}

                        <label className="label">Photo-URL</label>
                        <input name='photo' type="text" className="input" required placeholder="Photo-URL" />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" required placeholder="Email" />

                        <label className="label">Password</label>
                        <input name='password' type={show ? 'text' : 'password'} className="input" placeholder="Password" required />

                        {/* password toggle */}
                        <span onClick={() => setShow(!show)} className='absolute  top-62 right-3 z-10 '>
                            {
                                show ? <LuEye className=' h-4 w-4' /> : <LuEyeClosed className=' h-4 w-4' />
                            } </span>

                        {/* pass error check  */}

                        {passwordError && (
                            <p className='text-secondary text-sm font-medium pt-1'>
                                {passwordError}
                            </p>
                        )}


                        {/* regular button  */}

                        <button type='submit' className="btn btn-secondary mt-4">Register</button>

                        {/* divider */}
                        <div className='flex items-center justify-center gap-2 mt-3'>
                            <div className='h-px w-20 bg-secondary '></div>
                            <span>or</span>
                            <div className='h-px w-20 bg-secondary '></div>
                        </div>

                        {/* google signin button  */}

                        <button className='btn btn-primary flex items-center justify-center gap-3 cursor-pointer'
                            type='button'
                            onClick={handleGoogleSignIn}>
                            <FaGoogle className='w-5 h-5 text-secondary' />
                            Continue with Google
                        </button>

                        <p className='text-center pt-5'>Already Have an Account? <Link className='text-accent' to='/login'> Login</Link></p>

                         
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;