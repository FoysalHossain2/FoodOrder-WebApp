import React from 'react'
import Filed from './Filed'
import {useForm} from 'react-hook-form'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../../firebase'
import Toster from '../common/Toster';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const LoginForm = () => {

  const navigate = useNavigate();

    const {
    register, 
    handleSubmit ,
     formState: {errors},
     setError
    } = useForm();

    const submitForm = async (fromData) => {
      const { email, password } = fromData;
      try {
         await signInWithEmailAndPassword(auth, email, password);
         toast.success('Successfully logging')
         navigate('/')
      } catch (error) {
        toast.error(error.message)
      }
    }

  return (
    <>
        <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>

         <Filed  error={errors.email}>
          <input
            {...register("email", { required: true })}
            className={`w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary  ${
              !!errors.email ? "border-red-500" : "border-gray-200"
            }`}
            placeholder='email'
            type="email"
            name="email"
            id="email"
          />
        </Filed>

        <Filed  error={errors.password}>
          <input
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "Your password must be at least 6 characters ",
              },
            })}
            className={`w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary  ${
              !!errors.password ? "border-red-500" : "border-gray-200"
            }`}
            placeholder='password'
            type="password"
            name="password"
            id="password"
          />
        </Filed>

            <button
            type="submit"
            className="w-full bg-primary text-white rounded-full py-3 hover:bg-primary transition bg-green-500"
            >
             Continue
             <Toaster />
            </button>
        </form>
    </>
  )
}

export default LoginForm