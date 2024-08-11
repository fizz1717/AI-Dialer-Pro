"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function InstructionsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main className="hidden sm:block">
        <main className="instructions-page">
          <div className="instructions">
            <Image
              src={"../img/logo.svg"}
              width={190}
              height={0}
              alt="logo"
              className="logo"
            />
            <h1>Steps To Initiate The Dialer!</h1>
            <div>
              <h2>Step No:1: Download T-Max Softdialer:</h2>
              <ol>
                <li>
                  1. Go to the official website or trusted source where T-Max
                  Softdialer is available for download.
                </li>
                <li>2. Download the installation file for T-Max Softdialer.</li>
              </ol>
            </div>
            <div>
              <h2>Step No:2: Install T-Max Softdialer:</h2>
              <ol>
                <li>
                  1. Double-click on the downloaded file to start the
                  installation process.
                </li>
                <li>
                  2. Follow the on-screen instructions to complete the
                  installation.
                </li>
              </ol>
            </div>
            <div>
              <h2>Step No:3: Find the .exe file of the Softphone:</h2>
              <ol>
                <li>
                  1. Right-click on the shortcut icon for the application on
                  your desktop.
                </li>
                <li>
                  2. From the context menu, select &quot;Properties&quot;. This will open
                  the Properties window.
                </li>
                <li>
                  3. In the Properties window, look for the &quot;Target&quot; field.
                </li>
                <li>4. It will display the path to the .exe file.</li>
                <li>5. For example, Target field shows something like:</li>
                <li>
                  6. C:\Program Files (x86)\T-Max\Softdialer\Softdialer.exe
                </li>
                <li>
                  7. Save this target in any of your text files; it’s important
                  while activating the dialer.
                </li>
              </ol>
            </div>
            <div>
              <h2>Step No:4: Navigate towards AI Dialer:</h2>
              <ol>
                <li>
                  1. If the above instructions are completed successfully,
                  click the link given below.
                </li>
                <li>2. AI Dialer</li>
              </ol>
              <div className="flex items-end justify-center py-4">
                <a href="/pages/new/last">
                  <button className="bg-purple-400 px-10 py-5 font-bold rounded-full">
                    NEXT
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="instructions-bg">
            <img src="../img/Bg-3.svg" className="bg-for-instructions-page" />
            <img src="../img/third-image.svg" className="instructions-girl" />
            <div className="white-bg">
              <img src="../img/white-bg-for-instructions-page.svg" />
            </div>
          </div>
        </main>
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
                  <Link href="http://localhost:3000/">HOME</Link>
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
                  <Link href="http://localhost:3000/pages/new">
                    INSTRUCTION
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <main className="sm:hidden">
        <div className=" w-full h-[60rem]">
          <div className="min-h-screen flex items-center justify-center bg-[#d1b5db] py-6">
            <div className="bg-[#d1b5db] shadow-lg rounded-lg p-4 w-full max-w-md">
              <h1 className="text-2xl font-bold text-center mb-4">
                Steps To Initiate The Dialer!
              </h1>

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Step No:1: Download T-Max Softdialer:
                  </h2>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      Go to the official website or trusted source where T-Max
                      Softdialer is available for download.
                    </li>
                    <li>
                      Download the installation file for T-Max Softdialer.
                    </li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Step No:2: Install T-Max Softdialer:
                  </h2>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      Double-click on the downloaded file to start the
                      installation process.
                    </li>
                    <li>
                      Follow the on-screen instructions to complete the
                      installation.
                    </li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Step No:3: Find the .exe file of the Softphone:
                  </h2>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      Right-click on the shortcut icon for the application on
                      your desktop.
                    </li>
                    <li>
                      From the context menu, select &quot;Properties&quot;. This will open
                      the Properties window.
                    </li>
                    <li>
                      In the Properties window, look for the &quot;Target&quot; field.
                    </li>
                    <li>It will display the path to the .exe file.</li>
                    <li>For example, Target field shows something like:</li>
                    <li className="bg-gray-100 p-2 rounded">
                      C:\Program Files (x86)\T-Max\Softdialer\Softdialer.exe
                    </li>
                    <li>
                      Save this target in any of your text files; it’s important
                      while activating the dialer.
                    </li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Step No:4: Navigate towards AI Dialer:
                  </h2>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      If the above instructions are completed successfully,
                      click the link given below.
                    </li>
                    <li>
                      <a href="#" className="text-blue-500 underline">
                        AI Dialer
                      </a>
                    </li>
                  </ol>
                  <div className="flex items-center justify-center py-4">
                    <a href="/pages/new/last">
                      <button className="bg-white px-6 py-3 font-bold rounded-full">
                        NEXT
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
