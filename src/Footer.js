import React from "react";
import facebook from '../src/image/facebook.png';
import phone from '../src/image/phone.png';
import browser from '../src/image/web.png';

function Footer() {
  return (
    <div className="bg-red-600 py-4 md:py-10 text-white">
      <div className="flex flex-col md:flex-row md:space-x-10 lg:space-x-44">
        <div className="flex items-center mb-4 md:mb-0 md:ml-32">
          <img src={phone} alt="phone Logo" className="mr-2 w-6 h-auto bg-white rounded-full" />
          <p className="text-sm md:text-base">Toll free 1800 200 1234</p>
        </div>

        <div className="flex items-center mb-4 md:mb-0">
          <img src={facebook} alt="Facebook Logo" className="mr-2 w-6 h-auto" />
          <p className="text-sm md:text-base">www.facebook.com/cripumps</p>
        </div>

        <div className="flex items-center">
          <img src={browser} alt="browser Logo" className="mr-2 w-6 h-auto bg-white rounded-2xl" />
          <p className="text-sm md:text-base">www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
