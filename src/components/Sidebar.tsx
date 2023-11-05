"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
import Button from "./Button";
import LearnMenu from "./LearnItem";

const Sidebar = () => {

  return (
    <div className="h-auto pt-7 pb-8 bg-bg-color w-72">
      <div>
        <LearnMenu></LearnMenu>
      </div>
    </div>
  );
};

export default Sidebar;
