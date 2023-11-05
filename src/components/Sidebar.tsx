import React from "react";

const pages = [
  { name: "Page 1", link: "/learn/get-started" },
  { name: "Page 2", link: "/page2" },
  { name: "Page 3", link: "/page3" },
];

const Sidebar = () => {
  return (
    <div className="h-screen pt-7 pb-8 bg-bg-color flex flex-col border border-dashed w-72">
      <div>
        <ul>
          {pages.map((page, index) => (
            <li key={index} className="mb-0 pr-3 w-64 flex">
              <a
                className="block h-10 hover:bg-hover-color hover:text-text-color-react rounded-r-2xl px-2 py-1 w-full"
                href={page.link}
              >
                <div className="flex items-center h-full">
                  {page.name}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
