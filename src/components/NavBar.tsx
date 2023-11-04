"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { BiBookOpen } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import Button from "./Button";
import Image from 'next/image'
import Logo from '@/components/Logo';
import Link from 'next/link';
import { twMerge } from "tailwind-merge";

interface NavBarProps {
  children: React.ReactNode;
}

function NavBar({ children }: NavBarProps) {
  const pathname = usePathname();

  const activeClassName = 'font-medium bg-blue-400/20 text-cyan-500';
  const inactiveClassName = 'font-semibold hover:bg-button-bg';
  const routes = useMemo(() => [
    {
      label: 'Community',
      active: pathname === '/community',
      href: '/community',
    },
    {
      label: 'Team',
      active: pathname === '/team',
      href: '/team',
    },
    {
      label: 'Learn',
      active: pathname === '/learn',
      href: '/learn',
    }
  ], [pathname]);
  return (
    <div>
      <div className="flex items-center w-full p-0 fixed top-0 z-10 border-b border-opacity-10 border-white shadow bg-bg-color h-[64px]">
        <div className="ml-4">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden md:flex flex-row-reverse gap-x-3 grow h-auto">
          <Button className={twMerge(" w-50 p-3 mr-4 rounded-2xl text-sm", inactiveClassName)}>
            <a href="github.com">
              <BsGithub size={22} />
            </a>
          </Button>
          {routes.map((route) => (
            <Link href={route.href} key={route.label}>
              <Button className={` w-50 p-3 rounded-2xl text-sm ${route.active ? activeClassName : inactiveClassName}`}>
                {route.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}

export default NavBar;
