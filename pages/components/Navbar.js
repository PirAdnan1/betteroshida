import React, { useState } from "react";
const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "CAMPAIGNS", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="lg:flex items-center justify-between bg-white lg:py-1 lg:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <img
            className
            src="images/better oshida.png"
            width={290}
            alt="brand-logo"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-3 top-6 cursor-pointer lg:hidden"
        >
          <ion-icon className="ml-5" name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-100" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 lg:text-lg md:pl-5 md:my-9 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-green-900 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-green-800 md:ml-3  lg:text-lg md:py-1 hover:bg-green-700 text-white px-6 rounded-3xl">
            <ion-icon className="px-1" name="person-outline"></ion-icon>
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
