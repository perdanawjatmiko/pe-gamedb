'use client';

import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import DarkModeToggle from '@/components/DarkModeToggle';
import { Logo } from './Logo';
import { menuItems } from '@/lib/DataMenu';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileSidebar = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <div className={`fixed flex flex-col justify-start top-0 left-0 h-full w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-md z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 flex justify-between items-center">
          <Logo />
          <button className="text-sm" onClick={onClose}>
            <FaChevronLeft size={25} />
          </button>
        </div>
        <ul className="menu p-4">
          {menuItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link href={href} onClick={onClose}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};
