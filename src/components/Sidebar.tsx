"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
import Button from "./Button";
import LearnMenu from "./LearnItem";

const Sidebar = () => {

  return (
    <div className="pt-7 pb-8 bg-bg-color w-72 sticky top-0 h-screen">
      <div className="w-60">
        <LearnMenu></LearnMenu>
      </div>
    </div>
  );
};

export default Sidebar;
