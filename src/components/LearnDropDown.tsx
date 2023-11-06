import React from 'react';
import Link from 'next/link';
import Button from './Button';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

interface LearnDropDownProps {
  item: {
    title?: string;
    path?: string;
    routes?: Array<{ title: string; path: string }>;
    hasSectionHeader?: boolean;
    sectionHeader?: string;
  };
  isOpen: boolean;
  onItemClick: () => void;
}

const LearnDropDown: React.FC<LearnDropDownProps> = ({ item, isOpen, onItemClick }) => {
  const activeClassName = 'bg-hover-color text-text-color-react';
  const inactiveClassName = 'hover:bg-hover-color';
  const pathname = usePathname();

  const transitionClass = isOpen
    ? "transition ease-out duration-100 transform translate-y-0 opacity-100 max-h-56"
    : "transition ease-in duration-75 transform -translate-y-2 opacity-0 max-h-0 overflow-hidden";

  return (
    <div className="">
      {item.hasSectionHeader ? (
        <div className="text-gray-500 font-semibold text-sm ml-3 mt-2">
          {item.sectionHeader}
        </div>
      ) :
        <>
          <Button className={twMerge("ml-[-20px] font-medium text-start h-10 rounded-r-2xl w-[105%] mb-2", isOpen ? activeClassName : inactiveClassName)} onClick={onItemClick}>
            <div className='ml-[32px] mr-3 flex justify-between'>
              <div>
                {item.title}
              </div>
              {(item.routes?.length ?? 0) > 0 && (
                <div className={twMerge('transition font-semibold', isOpen ? "transform rotate-90" : "")}>
                  &gt;
                </div>
              )}
            </div>
          </Button>
          {isOpen && (
            <div className={twMerge("items-start flex flex-col w-full", transitionClass)}>
              {item.routes?.map((subItem, index) => (
                <Link href={subItem.path} className='w-full'>
                  <Button className={twMerge("ml-[-20px] text-start h-10 rounded-r-2xl text-[12px] hover:bg-slate-500/20 w-[105%]")} key={index}>
                    <div className='ml-[32px]'>
                      {subItem.title}
                    </div>
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </>
      }
    </div>
  );
};

export default LearnDropDown;
