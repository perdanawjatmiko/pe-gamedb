import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  const appName = process.env.NEXT_PUBLIC_APPNAME || 'GameDB';

  return (
    <Link href="/" className="font-bold text-xl">
      {appName}
    </Link>
  );
};
