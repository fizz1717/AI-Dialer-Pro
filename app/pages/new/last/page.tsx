"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default function DialerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Inline styles
  const dialerFormStyle = {
    position: 'absolute' as const,
    top: 0,
  };

  const dialerPathStyle = {
    position: 'absolute' as const,
    top: 400,
    left: 720,
    fontFamily: '"Quicksand", sans-serif',
    fontSize: 35,
    fontWeight: 400,
    fontStyle: 'normal' as const,
    zIndex: 1,
    width: 432,
  };

  const pathStyle = {
    position: 'absolute' as const,
    top: 450,
    left: 720,
    border: '0.5px solid #323941',
    borderRadius: 9,
    width: 636,
    height: 70,
  };

  const csvFileStyle = {
    position: 'absolute' as const,
    top: 560,
    left: 720,
    fontFamily: '"Quicksand", sans-serif',
    fontSize: 35,
    width: 434,
  };

  const uploadCsvFileStyle = {
    position: 'absolute' as const,
    top: 610,
    left: 720,
    border: '1px solid black',
    width: 636,
    height: 70,
    borderRadius: 9,
  };

  const dialerSubmitBtnStyle = {
    position: 'absolute' as const,
    top: 760,
    left: 900,
  };

  const submitBtnStyle = {
    fontFamily: '"Acme", sans-serif',
    fontWeight: 600,
    fontSize: 20,
    backgroundColor: '#b689c5',
    width: 250,
    height: 64,
    borderRadius: 62,
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
          <form style={dialerFormStyle} className="dialer-form">
            <label htmlFor="url" style={dialerPathStyle} className="dialer-path">
              Enter Your Dialer Path Here
            </label>
            <input type="url" id="url" name="url" style={pathStyle} className="path" />

            <label htmlFor="file" style={csvFileStyle} className="csv-file">
              Upload Your CSV File Here
            </label>
            <input
              type="url"
              id="url"
              name="url"
              style={uploadCsvFileStyle}
              className="upload-csv-file"
            />

            <div style={dialerSubmitBtnStyle} className="dialer-submit-btn">
              <input
                type="submit"
                value="Launch"
                style={submitBtnStyle}
                className="submit-btn"
              />
            </div>
          </form>
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
    </>
  );
}
