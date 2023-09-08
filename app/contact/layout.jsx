
"use client"

import "@styles/globals.css";
import Hamburger from "hamburger-react";
import { useState } from "react";



export default function RootLayout({ children }) {

   const [isOpen, setOpen] = useState(false);
  

  const toggle = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  
  return (
    <html lang="en">
      <body className="bg-[#3f8bc3]">
      <div className="fixed top-0 left-0 bg-[#3f8bc3] right-0 shadow-md p-4 z-50"

>
        <div className="flex flex-row justify-between mx-20 items-center">
      <ul>
        <li>
          <a href="/" className="text-2xl my-5 mx-5 font-custom list-none text-black">
            Joseph McCain
          </a>
        </li>
      </ul>

      <Hamburger toggled={isOpen} toggle={toggle} />
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          style={{
            color: "white",
            backgroundColor: "rgba(240, 240, 240, 0.5)",
            width: window.innerWidth < 1000 ? "60%" : "33.33%",
            height: "100%",
            right: "0",
            backdropFilter: "blur(5px)",
            flexDirection: "row-reverse"

            
          }}
          onClick={closeMenu}
        >
          <div
            className="flex flex-col justify-center items-center h-full"
            style={{
              width: "66.66%",
            }}
          >
            <ul className="space-y-4 text-4xl font-didact list-none">
              <li className="hover:scale-125">
                <a href="/about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li className="hover:scale-125">
                <a href="/laelia" onClick={closeMenu}>
                  Laelia
                </a>
              </li>
              <li className="hover:scale-125">
                <a href="/dalmatian" onClick={closeMenu}>
                  Dalmatian
                </a>
              </li>
              <li className="hover:scale-125">
                <a href="/contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
        </div>
        <div className="w-10/12 h-screen m-auto mt-20">{children}</div>
      </body>
    </html>
  );
}
