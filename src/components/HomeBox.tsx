import React from 'react'
import { twMerge } from 'tailwind-merge';

interface HomeBoxProps {
    children: React.ReactNode;
    className?: string;
}

function Box({children, className}: HomeBoxProps) {
  return (
    <div className={twMerge("w-full", className)}>
        {children}
    </div>
  )
}

export default Box