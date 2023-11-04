"use client";
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

function Button({children, className}: ButtonProps) {
  return (
    <button className={twMerge("transition duration-150 ease-in-out active:scale-[.90]", className)}>
        {children}
    </button>
  )
}

export default Button