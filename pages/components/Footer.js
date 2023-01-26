import React from "react";

function Footer() {
  return (
    <div>
      <div className="sm:grid mt-3 md:grid sm:grid-cols-2 md:grid-cols-4 space-y-2 sm:space-y-0 grid-cols-1 sm:text-left text-center py-11 mx-6">
        <div>
          <img src="images/better oshida.png" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            quisquam?
          </p>
          <p className="my-3">support@gmail.com</p>
          <p>0981254321</p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Company</h4>
          <a href="#">About us</a> <br />
          <a href="#">Contact us</a> <br />
          <a href="#">Gallery</a> <br />
        </div>
        <div>
          <h4 className="text-lg font-medium">Usefull Links</h4>
          <a href="#">Our Team</a> <br />
          <a href="#">Tetimonials</a> <br />
          <a href="#">Privacy Policy</a> <br />
          <a href="#">Terms & Conditions</a> <br />
          <a href="#">Refund Policy</a> <br />
        </div>
        <div>
          <h4 className="text-lg font-medium">Follow Us</h4>
          <a href="#">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, et.
          </a>{" "}
          <br />
          <div className="mt-5">
            <i className="fa-brands text-sky-500 fa-square-twitter fa-2x mx-2"></i>
            <i className="fa-brands text-[#166FE5] fa-square-facebook fa-2x mx-2"></i>
            <i className="fa-brands text-[#FF0000] fa-google-plus-g fa-2x mx-2"></i>
            <i className="fa-brands text-[#166FE5] fa-linkedin fa-2x mx-2"></i>
            <i className="fa-brands text-purple-600 fa-square-instagram fa-2x mx-2"></i>
            <i className="fa-brands text-[#FF0000] fa-square-youtube fa-2x mx-2"></i>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center grid col-span-2 sm:justify-between bg-[#EDEDED] px-5">
        <div>
          <span>© All Rights Reserved / Design by MD TAZIM </span>
        </div>
        <div className="inline-flex">
          <img
            className="mx-2"
            src="images/mastercard-2.svg"
            width={40}
            height={20}
            alt="mastercard"
          />
          <img
            className="mx-2"
            src="images/visa.svg"
            width={70}
            height={40}
            alt="visa"
          />
          <img
            className="mx-2"
            src="images/paytm.svg"
            width={70}
            height={40}
            alt="paytm"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
