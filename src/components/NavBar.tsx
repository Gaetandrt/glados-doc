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
    <div className="flex w-full fixed top-0 z-10 border-b border-opacity-95 border-white shadow-md bg-bg-color">
      <Logo
      />
      <div className="hidden basis-1/2 md:flex flex-row gap-x-5 p-2 h-[64px]">
        <Link href="/learn">
          <Button>
            Documentation
          </Button>
        </Link>
        <Button>
          L'équipe
        </Button>
        <Button>
          Communauté
        </Button>
        <Button className="p-3 font-si">
          <BsGithub size={22} />
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
