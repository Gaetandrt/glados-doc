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

interface NavBarProps {
  children: React.ReactNode;
}

function NavBar({ children }: NavBarProps) {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname === '/',
      href: '/',
    },
    {
      icon: BiBookOpen,
      label: 'Learn',
      active: pathname === '/learn',
      href: '/learn',
    }
  ], [pathname]);
  return (
    <div>
      <div className="flex w-full p-3 fixed top-0 z-10 border-b border-opacity-10 border-white shadow-md bg-bg-color h-[64px]">
        <Logo
        />
        <div className="hidden md:flex flex-row-reverse gap-x-5 grow h-auto">
          <Button className="font-si w-50">
            <BsGithub size={22} />
          </Button>
          <Button className="flex-initial w-50">
            Communauté
          </Button>
          <Button className="flex-initial w-50">
            L'équipe
          </Button>
          <Button className="flex-initial w-50">
            Documentation
          </Button>
        </div>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}

export default NavBar;
