import React, { useEffect, useState } from 'react';
import LearnDropDown from './LearnDropDown';
import sidebarLearn from './sidebarLearn.json'; // Assurez-vous que le chemin est correct
import { usePathname } from 'next/navigation';

const LearnMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/learn') {
      setActiveIndex(0);
    }
  });

  const handleItemClick = (index: number) => {
    if (index === activeIndex) {
      // Si l'index est déjà actif, on le désactive
      setActiveIndex(null);
    } else {
      // Sinon, on active le nouvel index
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex gap-x-3 w-full overflow-hidden">
      <div className="flex flex-col text-white w-full">
        {sidebarLearn.routes.map((item, index) => (
          <LearnDropDown
            key={index}
            item={item}
            isOpen={index === activeIndex}
            onItemClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnMenu;
