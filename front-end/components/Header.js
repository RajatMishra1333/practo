import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-[#14bef0]">practo</Link>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="#" className="text-gray-800 font-bold text-sm border-b-2 border-[#14bef0] pb-1">Find Doctors</Link>
              <Link href="#" className="text-gray-500 hover:text-[#14bef0] text-sm font-semibold">Video Consult</Link>
              <Link href="#" className="text-gray-500 hover:text-[#14bef0] text-sm font-semibold">Surgeries</Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
                <button className="text-xs font-bold text-gray-700">For Corporates</button>
                <span className="absolute -top-1 -right-3 text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-sm font-bold">New</span>
            </div>
            <a href="#" className="text-xs font-bold text-gray-700">For Providers</a>
            <a href="#" className="text-xs font-bold text-gray-700">Security & help</a>
            <button className="text-sm font-bold border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 text-gray-800">Login / Signup</button>
          </div>
           <div className="md:hidden">
                <button className="text-gray-500 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;