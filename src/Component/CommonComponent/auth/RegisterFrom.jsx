import React from 'react'
import Filed from './Filed'
import {useForm} from 'react-hook-form'
import {registerWithEmailPassword} from '../../../firebase'

const RegisterFrom = () => {

  
  const {
    register, 
    handleSubmit ,
     formState: {errors},
     setError
    } = useForm();

    const submitForm = async (fromData) => {
        try {
            const user = registerWithEmailPassword(email, password)
            console.log9(user)
        } catch (err) {
            console.log(err);
            
        }
    }

  return (
    <> 
        <form class="space-y-4">
              <div class="relative flex items-center">
                
                              
                      <Filed  error={errors.email} className="relative">
                      <input
                        {...register("email", { required: true })}
                        className={`relative px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-lg tracking-wide  ${
                          !!errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                        placeholder='email'
                        type="email"
                        name="email"
                        id="email"
                      />
                      
                    </Filed>
                
              </div>

                <div class="relative flex items-center">
                    <input type="password" placeholder="Enter Password"
                        class="px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-lg tracking-wide" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                        <path
                            d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                  <div class="relative flex items-center">
                      <input type="password" placeholder="Confirm Password"
                          class="px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-lg tracking-wide" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                          class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                          <path
                              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                              data-original="#000000"></path>
                      </svg>
                  </div>

                    <div class="flex">
                        <input type="checkbox" class="w-4" />
                        <label class="text-sm ml-4 text-gray-500">I have read and accept the <a href=""
                            class="text-sm text-blue-600 hover:underline">Terms and Conditions</a></label>
                    </div>

                    <div class="!mt-8 space-y-4">
                        <button type="button"
                            class="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary">Create an account</button>

                        <button type="button"
                            class="px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-lg tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#fff" class="inline mr-4" viewBox="0 0 512 512">
                                <path fill="#fbbd00"
                                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                    data-original="#fbbd00" />
                                <path fill="#0f9d58"
                                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                    data-original="#0f9d58" />
                                <path fill="#31aa52"
                                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                    data-original="#31aa52" />
                                <path fill="#3c79e6"
                                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                    data-original="#3c79e6" />
                                <path fill="#cf2d48"
                                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                    data-original="#cf2d48" />
                                <path fill="#eb4132"
                                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                    data-original="#eb4132" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
        </form>
    </>
  )
}

export default RegisterFrom