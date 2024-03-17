import React from "react";

import navbar_logo from '../../media/navbar_logo.png';

// Icons
import { IoHome } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

function Navbar() {
  return (
    <>

      <button
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Abrir Menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <nav
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          {/* Logo */}
          <div className="flex justify-center items-center gap-3 mb-3">
            <img src={navbar_logo} alt="logo" />
            <div>
              <h1 className="font-bold text-gray-600 leading-tight">Organização sem <br /> Fins Lucrativos</h1>
            </div>
          </div>

          <div className="border-b border-gray-200"></div>

          {/* Itens */}
          <ul className="space-y-2 font-medium mt-3 mb-3">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group">
                <IoHome />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group">
                <MdOutlineAttachMoney />
                <span className="flex-1 ms-3 whitespace-nowrap">Financeiro</span>
              </a>
            </li>
          </ul>
          {/* Divider */}
          <div className="border-b border-gray-200"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;