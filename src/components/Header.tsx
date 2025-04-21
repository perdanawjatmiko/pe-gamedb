// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { Logo } from './Logo';
import { MobileSidebar } from './MobileSidebar';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SearchModal from '@/components/SearchModal';
import { fetchGenres } from '@/lib/rawg';

function Header() {
  type Genre = {
    id: number;
    name: string;
    slug: string;
  };
  
  const [genres, setGenres] = useState<Genre[]>([]);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const data = await fetchGenres();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    getGenres();
  }, []);

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
              <li className='px-2 py-1'>
                <Link className='px-4 py-2 hover:bg-yellow-500 hover:text-black' href="/">Home</Link>
              </li>
              <li className='px-2 py-1'>
                <Link className='px-4 py-2 hover:bg-yellow-500 hover:text-black' href="/new-releases">New Games</Link>
              </li>
              <li className="px-2 py-1 relative group">
                <div className="px-4 py-2 hover:bg-yellow-500 hover:text-black cursor-pointer">
                  Genres
                </div>
                <ul className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 bg-white dark:bg-gray-900/90 menu rounded-box z-10 w-52 p-2 shadow-md transition-all duration-200 ease-out">
                  {genres.slice(0, 5).map((genre) => (
                    <li key={genre.id} className="py-2">
                      <Link className="hover:bg-yellow-500 hover:text-black" href={`/genres/${genre.slug}`}>
                        {genre.name}
                      </Link>
                    </li>
                  ))}
                  <li className="py-2">
                    <Link className="hover:bg-yellow-500 hover:text-black" href="/genres">
                      More genres...
                    </Link>
                  </li>
                </ul>
              </li>

              <li className='px-2 py-1'>
                <Link className='px-4 py-2 hover:bg-yellow-500 hover:text-black' href="/about">About Me</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:navbar-end md:gap-4">
            <label htmlFor="modalSearch" className="hover:scale-105 duration-150 cursor-pointer">
              <FaMagnifyingGlass size={25} />
            </label>
          </div>
        </div>
        <input type="checkbox" id="modalSearch" className="modal-toggle" />
        <SearchModal />
      </header>

      <MobileSidebar isOpen={sidebar} onClose={toggleSidebar} />
    </>
  );
}

export default Header;
