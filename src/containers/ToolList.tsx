import React from "react";

interface ITool {
  name: string;
  description: string;
  logoUrl: string;
  url: string;
}

interface IProps {
  tools: ITool[];
}

const ToolList: React.FC<IProps> = ({ tools }) => {
  return (
    <>
      {
        tools.map((tool) => (
          <div className="p-6 dark:bg-gray-900 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={tool.logoUrl} alt={tool.name} />
            </div>
            <div>
              <div className="text-xl font-medium text-black dark:text-white">{tool.name}</div>
              <p className="text-gray-500">{tool.description}</p>
              <span className=" ml-3">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                  </svg>
                    View
                  </button>
              </span>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default ToolList;
