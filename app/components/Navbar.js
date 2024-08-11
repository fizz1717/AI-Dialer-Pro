"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };


  return (
    
 <><main className="Home-Page hidden sm:block ">
          <div className="head flex justify-between items-center p-4 md:p-6">
              <Image src={"../img/logo.svg"} width={152} height={0} alt="logo" className="logo" />
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">AI DIALER PRO</p>
              <div className="nav-buttons flex space-x-4 md:space-x-6">
                  <button><a href="/Homepage">Home</a></button>
                  
                  <button><a href="/pages">Login</a></button>
                  <button><a href="/pages/new">Instruction</a></button>
              </div>
          </div>
      </main>
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
          </main></>
    
  )
    
      
} 
export default Navbar;
