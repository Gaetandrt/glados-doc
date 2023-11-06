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
      <div>
        {item.hasSectionHeader ? (
          <div className="text-gray-500 font-semibold text-sm ml-3 mt-2">
            {item.sectionHeader}
          </div>
        ) : (
          <>
            {item.routes && item.routes.length > 0 ? (
              // Si l'item a des routes, afficher le bouton qui peut être déroulé.
              <Button className={twMerge("ml-[-20px] font-medium text-start h-10 rounded-r-2xl w-[105%] mb-2", isOpen ? activeClassName : inactiveClassName)} onClick={onItemClick}>
                <div className='ml-[32px] mr-3 flex justify-between'>
                  <div>{item.title}</div>
                  <div className={twMerge('transition font-semibold', isOpen ? "transform rotate-90" : "")}>
                    &gt;
                  </div>
                </div>
              </Button>
            ) : (
              // Si l'item n'a pas de routes, afficher le bouton encapsulé dans Link si un path est fourni.
              item.path ? (
                <Link href={item.path} className='w-full'>
                  <Button className={twMerge("ml-[-20px] font-medium text-start h-10 rounded-r-2xl w-[105%] mb-2", isOpen ? activeClassName : inactiveClassName)} onClick={onItemClick}>
                    <div className='ml-[32px]'>{item.title}</div>
                  </Button>
                </Link>
              ) : (
                // Si l'item n'a ni routes ni path, afficher un bouton normal.
                <Button className={twMerge("ml-[-20px] font-medium text-start h-10 rounded-r-2xl w-[105%] mb-2", isOpen ? activeClassName : inactiveClassName)} onClick={onItemClick}>
                  <div className='ml-[32px]'>{item.title}</div>
                </Button>
              )
            )}

            {isOpen && item.routes && (
              <div className={twMerge("items-start flex flex-col w-full", transitionClass)}>
                {item.routes.map((subItem, index) => (
                  <Link href={subItem.path} key={index} className='w-full'>
                    <Button className={twMerge("ml-[-20px] text-start h-10 rounded-r-2xl text-[12px] hover:bg-slate-500/20 w-[105%]")}>
                      <div className='ml-[32px]'>
                        {subItem.title}
                      </div>
                    </Button>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    );

};

export default LearnDropDown;
