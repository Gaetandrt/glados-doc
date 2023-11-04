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
    <div className="flex w-full p-4">
      <Logo
      />
      <div className="hidden basis-1/2 md:flex flex-row-reverse gap-x-5 h-auto grow">
        <Button className="p-3 font-si">
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
  );
}

export default NavBar;
