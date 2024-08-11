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
    position: 'absolute',
    top: 0,
  };

  const dialerPathStyle = {
    position: 'absolute',
    top: 400,
    left: 720,
    fontFamily: '"Quicksand", sans-serif',
    fontSize: 35,
    fontWeight: 400,
    fontStyle: 'normal',
    zIndex: 1,
    width: 432,
  };

  const pathStyle = {
    position: 'absolute',
    top: 450,
    left: 720,
    border: '0.5px solid #323941',
    borderRadius: 9,
    width: 636,
    height: 70,
  };

  const csvFileStyle = {
    position: 'absolute',
    top: 560,
    left: 720,
    fontFamily: '"Quicksand", sans-serif',
    fontSize: 35,
    width: 434,
  };

  const uploadCsvFileStyle = {
    position: 'absolute',
    top: 610,
    left: 720,
    border: '1px solid black',
    width: 636,
    height: 70,
    borderRadius: 9,
  };

  const dialerSubmitBtnStyle = {
    position: 'absolute',
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
    </>
  );
}
