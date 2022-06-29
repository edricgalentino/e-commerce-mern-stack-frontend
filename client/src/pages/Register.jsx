import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div
                className="flex w-full h-screen lg:p-0 p-5 justify-center items-center opacity-80"
                style={{ backgroundImage: `url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`, backgroundPosition: "center" }}
            >
                <form action="post" className="flex md:w-2/5 w-full bg-white lg:gap-4 gap-6 lg:p-5 p-7 justify-start items-start flex-col">
                    <h1 className="title text-3xl uppercase text-start">CREATE AN ACCOUNT</h1>
                    <div className="grid w-full lg:gap-4 gap-3 grid-flow-row lg:grid-cols-2 grid-cols-1">
                        <label htmlFor="first-name" className=" w-full">
                            <input type="text" id="first-name" className=" border-2 border-slate-500 w-full p-3" placeholder="first name" />
                        </label>
                        <label htmlFor="last-name" className=" w-full">
                            <input type="text" id="last-name" className=" border-2 border-slate-500 w-full p-3" placeholder="last name" />
                        </label>
                        <label htmlFor="username" className=" w-full">
                            <input type="text" id="username" className=" border-2 border-slate-500 w-full p-3" placeholder="username" />
                        </label>
                        <label htmlFor="email" className=" w-full">
                            <input type="email" id="email" className=" border-2 border-slate-500 w-full p-3" placeholder="email" />
                        </label>
                        <label htmlFor="password" className=" w-full">
                            <input type="password" id="password" className=" border-2 border-slate-500 w-full p-3" placeholder="password" />
                        </label>
                        <label htmlFor="confirm-password" className=" w-full">
                            <input type="password" id="confirm-password" className=" border-2 border-slate-500 w-full p-3" placeholder="confirm password" />
                        </label>
                    </div>
                    <div className="info flex flex-col gap-2">
                        <p className="text-sm text-start">
                            By creating an account I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong>.
                        </p>
                    </div>
                    <button type="submit" className=" w-2/5 bg-teal-700 hover:bg-teal-800 text-white uppercase text-lg p-2 px-4">
                        CREATE
                    </button>
                    <div className="info flex flex-col gap-2">
                        <Link to={"/login"} className="text-sm uppercase underline text-start">
                            Already have an account?
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
