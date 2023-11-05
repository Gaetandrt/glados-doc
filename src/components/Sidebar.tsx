"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const activeClassName = 'hover:bg-hover-color text-text-color-react';
  const inactiveClassName = 'hover:bg-hover-color';
  const pages = useMemo(() => [
    {
      name: 'Page 1',
      active: pathname === '/learn/get-started',
      href: '/learn/get-started',
    },
    {
      name: 'Page 2',
      active: pathname === '/page2',
      href: '/page2',
    },
    {
      name: 'Page 3',
      active: pathname === '/page3',
      href: '/page3',
    }
  ], [pathname]);
  return (
    <div className="h-screen pt-7 pb-8 bg-bg-color flex flex-col w-72">
      <div>
        <ul>
          {pages.map((page, index) => (
            <li key={index} className="mb-0 pr-3 w-64 flex">
              <a
                className={`h-10 rounded-r-2xl px-2 py-1 w-full ${page.active ? activeClassName : inactiveClassName}`}
                href={page.href}
              >
                <div className="flex items-center h-full">
                  {page.name}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
