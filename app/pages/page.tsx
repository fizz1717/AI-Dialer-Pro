"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";


;
export default function SigninPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
    
      <main className="signin-page hidden sm:block">
        <div className="signin-bg">
          <img src="../img/Bg-2.svg" alt="Background" className="bg-image" />
          <div>
            <img src="../img/white-bg.svg" className="first-half-white-bg" />
          </div>
          <div className="signin-logo">
            <Image
              src={"../img/logo.svg"}
              width={200}
              height={0}
              alt="logo"
              className="logo"
            ></Image>
          </div>
          <div className="signin-form">
            <h1>Welcome!</h1>
            <h2>Login to continue</h2>
            <form id="login-form">
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  User name or email address
                </label>
                <input
                  type="username"
                  id="username"
                  className="form-control"
                  placeholder="TYPE HERE"
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="TYPE HERE"
                />
              </div>
              <div className="signin-btn">
                <a href="/pages/new" id="login-btn" className="btn">
                  SIGN IN
                </a>
              </div>
            </form>
          </div>
          <div className="second-image">
            <img src="../img/second-image.svg" alt="call center image" />
          </div>
          <div className="white-bg">
            <img src="../img/white-bg-for-instructions-page.svg" />
          </div>
        </div>
      </main>
    
      
      <main className="sm:hidden">
      <main className="bg-black h-28 w-full sm:hidden">
              <div className="flex flex-row justify-center items-center  px-3 py-9">
                  <h1 className="font-sans font-bold text-3xl text-white">
                      AI DIALER PRO
                  </h1>

                  <div className="sm:hidden flex flex-1 justify-end items-center">
                      <img
                          src={isOpen ? "close.svg" : "menu.svg"}
                          alt="menu"
                          className="w-[28px] h-[28px] object-contain cursor-pointer mx-4"
                          onClick={handleToggle} />
                      <div
                          className={`${!isOpen ? "hidden" : "flex"} p-6 bg-gray-900 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                      >
                          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                              <li
                                  className="font-sans font-medium cursor-pointer text-white text-[16px]"
                                  onClick={handleToggle}
                              >
                                  <Link href="/Homepage">HOME</Link>
                              </li>
                              



                              <li
                                  className="font-sans font-medium cursor-pointer text-white text-[16px]"
                                  onClick={handleToggle}
                              >
                                  <Link href="./pages" prefetch={true}>LOGIN</Link>
                              </li>
                              <li
                                  className="font-sans font-medium cursor-pointer text-white text-[16px]"
                                  onClick={handleToggle}
                              >
                                  <Link href="/pages/new">INSTRUCTION</Link>
                              </li>

                          </ul>
                      </div>
                  </div>
              </div>
          </main>
<div className="bg-[#ac6cd8] h-[60rem] w-full">
<div className="min-h-screen flex items-center  justify-center bg-[#ac6cd8] py-6">
  <div className="flex flex-col items-center justify-center bg-white h-[30rem] shadow-lg rounded-lg p-3 w-full max-w-xs">
    <h1 className="text-2xl font-bold text-center mb-4">Welcome!</h1>
    <p className="text-center text-gray-600 mb-6">Login to continue</p>
    
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">User name or email address</label>
        <input
          id="email"
          type="text"
          placeholder="TYPE HERE"
          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          placeholder="TYPE HERE"
          className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <a href="/pages/new"> SIGN IN</a>
       
      </button>
    </form>
  </div>
</div>
</div>

      </main>
    </>
  );
}
