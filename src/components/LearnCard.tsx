import React from 'react'
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface LearnCardProps {
  children: React.ReactNode;
  className?: string;
  Icon: IconType;
  title?: string;
  titleClassName?: string;
  iconSize?: number;
  iconColor?: string;
}

function LearnCard({ children, className, Icon, title, titleClassName, iconSize, iconColor }: LearnCardProps) {
  return (
    <div className={twMerge("p-8 bg-blue-900/30 rounded-2xl w-full border border-white/10", className)}>
      <div className='flex flex-row gap-2 items-center mb-6'>
        <Icon size={iconSize} color={iconColor} />
        <h1 className={twMerge("font-semibold text-3xl", titleClassName)}>{title}</h1>
      </div>
      <div className='ml-5 mr-5'>
        {children}
      </div>
    </div>
  )
}

export default LearnCard