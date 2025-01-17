import React, { useState } from 'react'
import { GoLocation } from "react-icons/go";

const CartLeftPart = () => {

    const [UserInfo, setUserInfo] = useState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        City: "",
        Division: "",
        District: "",
        Address: "",
        Message: "",
      });
    
      const [UserInfoError, setUserInfoError] = useState({
        NameError: "",
        EmailError: "",
        PhoneNumberError: "",
        CityError: "",
        DivisionError: "",
        DistrictError: "",
        AddressError: "",
      });
    
      // HandleOnChange input change functionality
      const HandleOnChange = (e) => {
        if (e.target.checked) {
          setUserInfo({
            ...UserInfo,
            [e.target.id]: true,
          });
        } else {
          setUserInfo({
            ...UserInfo,
            [e.target.id]: e.target.value,
          });
        }
      };
    
      // HandleOderButton functionality
      const HandleOderButton = () => {
        const { Name, Email, PhoneNumber, City, Division, District, Address } =
          UserInfo;
    
        if (!Name) {
          setUserInfoError({
            ...UserInfoError,
            NameError: "Name is required",
          });
        } else if (!Email) {
          setUserInfoError({
            ...UserInfoError,
            NameError: "",
            EmailError: "Email is required",
          });
        } else if (!PhoneNumber) {
          setUserInfoError({
            ...UserInfoError,
            NameError: "",
            EmailError: "",
            PhoneNumberError: "PhoneNumber is required",
          });
        } else if (!City) {
          setUserInfoError({
            ...UserInfoError,
            NameError: "",
            EmailError: "",
            PhoneNumberError: "",
            CityError: "City is required",
          });
        } else if (!Division) {
          setUserInfoError({
            ...UserInfoError,
            NameError: "",
            EmailError: "",
            PhoneNumberError: "",
            CityError: "",
            DivisionError: "Division is required",
          });
        } else if (!District) {
          setUserInfoError({
            ...UserInfoError,
            NameError: "",
            EmailError: "",
            PhoneNumberError: "",
            CityError: "",
            DivisionError: "",
            DistrictError: "District is required",
          });
        } else if (!Address) {
          setUserInfoError({
            ...UserInfoError,
            NameError: "",
            EmailError: "",
            PhoneNumberError: "",
            CityError: "",
            DivisionError: "",
            DistrictError: "",
            AddressError: "Address is required",
          });
        } else {
          setUserInfoError({
            ...UserInfoError,
            NameError: "",
            EmailError: "",
            PhoneNumberError: "",
            CityError: "",
            DivisionError: "",
            DistrictError: "",
            AddressError: "",
          });
        }
      };

  return (
    <div>
        <div className='bg-white py-6'>
            <p className='px-12 text-gray-500 font-bold font-DM_Sans text-lg'>Delivery address</p>
            <span className='absolute -mt-8 -ml-4 bg-white p-[10px] text-xl shadow-lg shadow-gray-400'>
                <GoLocation />
            </span>
        </div>

        <div className="mt-4 lg:w-[770px] sm:w-full bg-[#F8F8FD] py-4 px-5 rounded-lg flex flex-col sm:flex-col">
            <div className="lg:flex lg:flex-row sm:flex-col items-center justify-between">
            <div className="flex flex-col">
                <label>Name</label>
                <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Name"
                className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${
                    UserInfoError.NameError
                    ? "border-2 border-red-400 rounded-xl"
                    : "border-2 border-slate-200 rounded-xl"
                }`}
                value={UserInfo.Name}
                onChange={HandleOnChange}
                />
                {UserInfoError.NameError && (
                <p className="text-red-500">{UserInfoError.NameError}</p>
                )}
            </div>

            <div className="flex flex-col">
                <label>Email</label>
                <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Email"
                className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${
                    UserInfoError.EmailError
                    ? "border-2 border-red-400 rounded-xl"
                    : "border-2 border-slate-200 rounded-xl"
                }`}
                value={UserInfo.Email}
                onChange={HandleOnChange}
                />

                {UserInfoError.EmailError && (
                <p className="text-red-500">{UserInfoError.EmailError}</p>
                )}
            </div>
            </div>

            <div className="lg:flex lg:flex-row sm:flex-col items-center justify-between mt-4">
            <div className="flex flex-col">
                <label>Phone</label>
                <input
                type="PhoneNumber"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="PhoneNumber"
                className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${
                    UserInfoError.PhoneNumberError
                    ? "border-2 border-red-400 rounded-xl"
                    : "border-2 border-slate-200 rounded-xl"
                }`}
                value={UserInfo.PhoneNumber}
                onChange={HandleOnChange}
                />

                {UserInfoError.PhoneNumberError && (
                <p className="text-red-500">
                    {UserInfoError.PhoneNumberError}
                </p>
                )}
            </div>
            <div className="flex flex-col">
                <label>City</label>
                <input
                type="text"
                name="City"
                id="City"
                placeholder="Select City"
                className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${
                    UserInfoError.CityError
                    ? "border-2 border-red-400 rounded-xl"
                    : "border-2 border-slate-200 rounded-xl"
                }`}
                value={UserInfo.City}
                onChange={HandleOnChange}
                />

                {UserInfoError.CityError && (
                <p className="text-red-500">{UserInfoError.CityError}</p>
                )}
            </div>
            </div>

            <div className="lg:flex lg:flex-row sm:flex-col items-center justify-between mt-4">
            <div className="flex flex-col">
                <label>Division</label>
                <select
                type="text"
                name="Division"
                id="Division"
                placeholder="Select Division"
                className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${
                    UserInfoError.DivisionError
                    ? "border-2 border-red-400 rounded-xl"
                    : "border-2 border-slate-200 rounded-xl"
                }`}
                value={UserInfo.Division}
                onChange={HandleOnChange}
                >
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Dhaka">Dhaka</option>
                </select>

                {UserInfoError.DivisionError && (
                <p className="text-red-500">
                    {UserInfoError.DivisionError}
                </p>
                )}
            </div>
            <div className="flex flex-col">
                <label>District</label>
                <select
                type="text"
                name="District"
                id="District"
                placeholder="Select District"
                className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${
                    UserInfoError.DistrictError
                    ? "border-2 border-red-400 rounded-xl"
                    : "border-2 border-slate-200 rounded-xl"
                }`}
                value={UserInfo.District}
                onChange={HandleOnChange}
                >
                <option value="Manikgonj">Manikgonj</option>
                <option value="Manikgonj">Manikgonj</option>
                <option value="Manikgonj">Manikgonj</option>
                <option value="Manikgonj">Manikgonj</option>
                <option value="Manikgonj">Manikgonj</option>
                </select>

                {UserInfoError.DistrictError && (
                <p className="text-red-500">
                    {UserInfoError.DistrictError}
                </p>
                )}
            </div>
            </div>

            <div className="mt-4">
            <div className="flex flex-col">
                <label> Address </label>
                <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Address"
                className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${
                    UserInfoError.AddressError
                    ? "border-2 border-red-400 rounded-xl"
                    : "border-2 border-slate-200 rounded-xl"
                }`}
                value={UserInfo.Address}
                onChange={HandleOnChange}
                />

                {UserInfoError.AddressError && (
                <p className="text-red-500">{UserInfoError.AddressError}</p>
                )}
            </div>
            </div>

            {/* --------- Order Note (optional) --------- */}
            <div className="mt-4">
            <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="10"
                placeholder="Order Note (optional)"
                className="pl-2 lg:w-full rounded-xl py-2 border-2 h-28 sm:w-[336px]"
                value={UserInfo.Message}
                onChange={HandleOnChange}
            ></textarea>
            </div>
            {/* --------- Order Note (optional) --------- */}
        </div>
    </div>
  )
}

export default CartLeftPart