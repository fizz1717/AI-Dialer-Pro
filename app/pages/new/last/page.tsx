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
    position: "absolute" as const,
    top: 0,
  };

  const dialerPathStyle = {
    position: "absolute" as const,
    top: 400,
    left: 720,
    fontFamily: '"Quicksand", sans-serif',
    fontSize: 35,
    fontWeight: 400,
    fontStyle: "normal" as const,
    zIndex: 1,
    width: 432,
  };

  const pathStyle = {
    position: "absolute" as const,
    top: 450,
    left: 720,
    border: "0.5px solid #323941",
    borderRadius: 9,
    width: 636,
    height: 70,
  };

  const csvFileStyle = {
    position: "absolute" as const,
    top: 560,
    left: 720,
    fontFamily: '"Quicksand", sans-serif',
    fontSize: 35,
    width: 434,
  };

  const uploadCsvFileStyle = {
    position: "absolute" as const,
    top: 610,
    left: 720,
    border: "1px solid black",
    width: 636,
    height: 70,
    borderRadius: 9,
  };

  const dialerSubmitBtnLeftStyle = {
    position: "absolute" as const,
    top: 760,
    left: 1180,
  };

  const dialerSubmitBtnMiddleStyle = {
    position: "absolute" as const,
    top: 760,
    left: 740,
    transform: "translateX(-50%)",
  };

  const dialerSubmitBtnRightStyle = {
    position: "absolute" as const,
    top: 760,
    right: 200,
  };

  const submitBtnStyle = {
    fontFamily: '"Acme", sans-serif',
    fontWeight: 600,
    fontSize: 20,
    backgroundColor: "#b689c5",
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
            <label
              htmlFor="url"
              style={dialerPathStyle}
              className="dialer-path"
            >
              Enter Your Dialer Path Here
            </label>
            <input
              type="url"
              id="url"
              name="url"
              style={pathStyle}
              className="path"
            />

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

            {/* Right Submit Button */}
            <div style={dialerSubmitBtnLeftStyle} className="dialer-submit-btn">
              <input
                type="submit"
                value="Stop the dialer"
                style={submitBtnStyle}
                className="submit-btn"
              />
            </div>

            {/* Left Submit Button */}
            <div
              style={dialerSubmitBtnMiddleStyle}
              className="dialer-submit-btn"
            >
              <input
                type="submit"
                value="Open the dialer"
                style={submitBtnStyle}
                className="submit-btn"
              />
            </div>

            {/* Middle Submit Button */}
            <div
              style={dialerSubmitBtnRightStyle}
              className="dialer-submit-btn"
            >
              <input
                type="submit"
                value="Run the dialer"
                style={submitBtnStyle}
                className="submit-btn"
              />
            </div>
          </form>
        </div>
      </main>
      <main className="sm:hidden">
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

            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Path
              </label>
              <input
                type="text"
                placeholder="Enter Your CSV Path Here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-center py-4">
              <a href="/pages/new/last">
                <button className="bg-[#d1b5db] px-6 py-3 font-bold rounded-full">
                  Open the dialer
                </button>
              </a>
            </div>

            <div className="flex items-center justify-center py-4">
              <a href="/pages/new/last">
                <button className="bg-[#d1b5db] px-6 py-3 font-bold rounded-full">
                  Run the dialer
                </button>
              </a>
            </div>

            <div className="flex items-center justify-center py-4">
              <a href="/pages/new/last">
                <button className="bg-[#d1b5db] px-6 py-3 font-bold rounded-full">
                  Stop the dialer
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
