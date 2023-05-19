'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavLinkProps } from '@/components/NavLink/NavLink.types.';

export const NavLink: FC<NavLinkProps> = ({ children, slug }) => {
  const pathname = usePathname();
  const isActive = slug === pathname;

  return (
    <Link
      className={`navLink ${
        isActive ? 'font-extrabold border-b-2 border-b-teal-400' : 'font-medium'
      }`}
      href={slug}
    >
      {children}
    </Link>
  );
};
