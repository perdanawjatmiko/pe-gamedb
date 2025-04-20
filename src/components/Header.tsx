'use client';

import React, { useState } from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';
import { FaBars, FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Logo } from './Logo';
import { menuItems } from '@/lib/DataMenu';
import { MobileSidebar } from './MobileSidebar';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SearchModal from '@/components/SearchModal';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* HEADER */}
      <header className="bg-transparent min-h-20 flex items-center">
        <div className="navbar bg-transparent shadow-b-sm text-black dark:text-white w-full md:max-w-[1140px] mx-auto">
          <div className="navbar-start">
            <button onClick={toggleSidebar} className="btn btn-ghost lg:hidden">
              <FaBars size={25} />
            </button>
            <Logo />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex-row inline-flex items-center w-fit flex-wrap p-[calc(0.25rem*2)] text-base px-1 font-semibold">
              {menuItems.map(({ id, label, href, isDropdown = false, dropdowncontent }) => (
                <li key={id} className='px-2 py-1'>
                  {isDropdown ?
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="px-4 py-2 hover:bg-yellow-500 hover:text-black cursor-pointer">{label}</div>
                      <ul tabIndex={0} className="dropdown-content bg-white dark:bg-gray-900/90 menu rounded-box z-1 w-52 p-2 shadow-sm">
                        {dropdowncontent?.map(({ label, href }) => (
                          <div key={label}>
                            <li className='py-2' key={label}>
                              <Link className='hover:bg-yellow-500 hover:text-black' href={href}>{label}</Link>
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div> :
                    <Link className='px-4 py-2 hover:bg-yellow-500 hover:text-black' href={href}>{label}</Link>
                  }

                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:navbar-end md:gap-4">
            <label htmlFor="modalSearch" className="hover:scale-105 duration-150 cursor-pointer">
              <FaMagnifyingGlass size={25} />
            </label>
          </div>
        </div>
        <input type="checkbox" id="modalSearch" className="modal-toggle" />
        <SearchModal/>

      </header>

      <MobileSidebar isOpen={sidebar} onClose={toggleSidebar} />
    </>
  );
}

export default Header;
