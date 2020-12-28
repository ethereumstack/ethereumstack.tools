import React, { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  onSearchChange: (query: string) => void;
}

interface ILink {
  name: string;
  path: string;
  iconComponent: any;
}

const ToolsIcon: React.FC = (props) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
)

const DiscoverIcon: React.FC = (props) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
)

const links: ILink[] = [
  {
    name: "Discover",
    path: "/",
    iconComponent: <DiscoverIcon />,
  },
  {
    name: "Tools",
    path: "/tools",
    iconComponent: <ToolsIcon />,
  },
];

const Sidebar: React.FC<IProps> = (props) => {
  const ref = useRef(null);
  useHotkeys("/", (event: KeyboardEvent) => {
    event.preventDefault();
    const cur: any = ref.current;
    if (cur !== null) {
      cur.focus();
    }
  });
  const location = useLocation();
  return (
    <div className="w-64 bg-gray-700 dark:bg-gray-900 text-white min-h-screen fixed pt-4 select-none">
      <div className="text-center p-4 relative">
        <input
          ref={ref}
          type="text"
          onChange={(event) => props.onSearchChange(event.target.value)}
          placeholder="Search"
          className="bg-gray-500 text-xs w-full p-2 pl-9 rounded border-gray-800"
        />
        <div className="absolute top-0 py-5 px-2 text-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        <div className="absolute right-6 top-0 mt-5 mb-5 px-2 sm:block text-gray-400 text-sm leading-5 border border-gray-300 rounded-md">
          /
        </div>
      </div>
      <div className="mt-4">
        {links.map((link) => {
          return (
            <Link to={link.path}>
              <div className={`flex items-center px-4 py-2 text-gray-50 cursor-pointer ${location.pathname === link.path ? "bg-gray-700" : undefined} hover:bg-gray-800`}>
                <span className="pl-3">
                  {link.iconComponent}
                </span>
                <div className="pl-2">{link.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
