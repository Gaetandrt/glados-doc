"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { BiBookOpen } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import Button from "./Button";
import Image from 'next/image'
import Logo from '@/components/Logo';

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
    <div className="flex w-full">
      <Logo
      />
      <div className="hidden basis-1/2 md:flex flex-row gap-x-5 p-2 h-auto">
        <Button>
          Documentation
        </Button>
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
  );
}

export default NavBar;
