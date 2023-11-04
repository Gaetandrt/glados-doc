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
    <button className={twMerge("font-light hover:bg-button-bg p-2 rounded-xl", className)}>
        {children}
    </button>
  )
}

export default Button