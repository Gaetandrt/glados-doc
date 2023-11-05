import Link from 'next/link';
import { LearnMenu } from './LearnMenuList';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface DropdownProps {
    item: LearnMenu;
}

export default function Dropdown({item}: DropdownProps) {
    const [open, setOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setOpen(!open);
    }

    const transitionClass = open ? "flex" : "hidden";

    return (
        <>
          <div className="relative">
                <button
                    className="hover:text-blue-400"
                    onClick={toggle}
                >{item.title}</button>
                <div className={`absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transitionClass}`}>
                    {
                        menuItems.map(item =>
                            <Link
                                key={item.route}
                                className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                                href={item?.route || ''}
                                onClick={toggle}
                            >{item.title}</Link>
                        )
                    }
                </div>
            </div>
            {
                open
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}