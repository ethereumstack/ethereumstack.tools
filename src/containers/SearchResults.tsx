import React from "react";
import { Link } from "react-router-dom";
import Divider from "./Divider";

export interface ITool {
  logoUrl: string;
  summary?: string;
  description?: string;
  url: string;
  name: string;
}

interface IProps {
  searchQuery: string;
  tools: ITool[];
}

const SearchResults: React.FC<IProps> = (props) => {
  return (
    <div className="p-8">
      <h1 className="text-5xl">Results for "{props.searchQuery}"</h1>
      <Divider />
      {props.tools.map((tool, index) => {
        return (
          <a href={tool.url}>
            <div className={"rounded-lg cursor-pointer select-none grid grid-cols-3"}>
              <div className="p-6 flex col-span-2">
                <div className="flex-shrink-0 self-center mr-10">
                  <img className="h-20 w-20" src={tool.logoUrl} alt={tool.name} />
                </div>
                <div>
                  <div className="text-xl font-medium mb-4">{tool.name}</div>
                  <p className="text-gray-500 mb-4">{tool.summary || tool.description}</p>
                </div>
              </div>
              <div className="self-center justify-self-end flex justify-end col-span-1">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                  </svg>
                  View
                </button>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SearchResults;
