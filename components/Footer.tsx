import React from 'react';
// import { HiOutlineMoon, HiOutlineDesktopComputer } from 'react-icons/hi';
// import { Sun } from 'lucide-react';
const Footer: React.FC = () => {
  return (
    <div className=" py-20">
      <footer className="mx-auto max-w-xl border-t  border-[#F4F4F5] flex items-center justify-between py-4 px-4">
        {/* Left side text */}
        <span className="text-sm text-gray-600">
          Made with <span className="text-red-500">❤️</span> by Ahmad
        </span>

        {/* Right side icons */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          {/* <Sun className="w-5 h-5 cursor-pointer hover:text-gray-800" />
          <HiOutlineMoon className="w-5 h-5 cursor-pointer hover:text-gray-800" />
          <HiOutlineDesktopComputer className="w-5 h-5 cursor-pointer hover:text-gray-800" /> */}
          @ {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
