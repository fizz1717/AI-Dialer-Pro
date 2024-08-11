"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import '../styles/globals.css';
export default function DialerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <main className="hidden sm:block">
        <div>
          <img src="../../img/Bg-4.svg" className="dialer-bg" />
        </div>
        <div className="inside-dialer-box">
          <img
            src="../../img/white-bg-for-dialer-page.svg"
            className="wb-dialer-page"
          />
          <Image
            src={"../../img/logo.svg"}
            width={200}
            height={0}
            alt="logo"
            className="dialer-logo"
          ></Image>
          <h1 className="dialer-heading">Launch Dialer</h1>
          <form className="dialer-form">
            <label htmlFor="url" className="dialer-path">
              Enter Your Dialer Path Here
            </label>
            <input type="url" id="url" name="url" className="path"></input>

            <label htmlFor="file" className="csv-file">
              Upload Your CSV File Here
            </label>
            <input
              type="url"
              id="url"
              name="url"
              className="upload-csv-file"
            ></input>

            <div className="dialer-submit-btn">
              <input
                type="submit"
                value="Launch"
                className="submit-btn"
              ></input>
            </div>
          </form>
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
              onClick={handleToggle}
            />
            <div
              className={`${
                !isOpen ? "hidden" : "flex"
              } p-6 bg-gray-900 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
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
                  <Link href="./pages" prefetch={true}>
                    LOGIN
                  </Link>
                </li>
                <li
                  className="font-sans font-medium cursor-pointer text-white text-[16px]"
                  onClick={handleToggle}
                >
                  <Link href="/pages/new">
                    INSTRUCTION
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <main className="sm:hidden ">
        <div className="min-h-screen flex items-center justify-center bg-[#d1b5db] py-2">
          <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg h-[30rem] p-4 w-full max-w-md space-y-6">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Launch Dialer
              </label>
              <input
                type="text"
                placeholder="Enter Your Dialer Path Here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Path
              </label>
              <input
                type="text"
                placeholder="Upload Your CSV File Here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                disabled
              />
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            </div>
            <div className="flex items-center justify-center py-4">
              <a href="/pages/new/last">
                <button className="bg-[#d1b5db] px-6 py-3 font-bold rounded-full">
                  LAUNCH
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
