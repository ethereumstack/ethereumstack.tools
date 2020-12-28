import groupBy from "lodash/groupBy";
import map from "lodash/map";
import React from "react";
import tools from "../tools.json";

interface IProps {

}

const ToolsPage: React.FC<IProps> = (props) => {
  const groupedTools = groupBy(tools, "category");
  return (
    <div>
      <div className="flex justify-around p-4 w-full">
        {tools.filter((tool) => tool.featured).slice(0, 2).map((tool, index) => {
          return (
            <a href={tool.url} className={`w-1/2 ${index % 2 === 0 ? "mr-2" : "ml-2"} p-6 dark:bg-gray-900 bg-white rounded-xl shadow-md flex cursor-pointer select-none`}>
              <div className="flex-grow">
                <div className="text-xl font-medium dark:text-white mb-4">{tool.name}</div>
                <p className="text-gray-500 mb-4">{tool.description}</p>
              </div>
              <div className="flex-shrink-0 self-center w-24">
                <img className="h-20 w-20" src={tool.logoUrl} alt={tool.name} />
              </div>
            </a>
          );
        })}
      </div>
      {map(groupedTools, (t: any, category: string) => (
        <>
          <div className="api-tools p-6">
            <div className="flex justify-between">
              <h2 className="capitalize font-normal mb-8 text-gray-500 text-xl">
                {category === "undefined" ? "Other" : category}
              </h2>
            </div>
            <div className="grid grid-cols-2">
              {map(t, (tool: any, index: number) => (
                <a href={tool.url}>
                  <div className={`${index % 2 === 0 ? "mr-2" : "ml-2"} rounded-lg flex cursor-pointer select-none`}>
                    <div className="p-6 flex w-full">
                      <div className="flex-shrink-0 self-start mr-10 justify-self-start">
                        <img className="h-20 w-20" src={tool.logoUrl} alt={tool.name} />
                      </div>
                      <div className="w-full">
                        <div className="text-xl font-medium mb-4">{tool.name}</div>
                        <p className="text-gray-500 mb-4">{tool.description}</p>
                      </div>
                    </div>
                    <div className="self-start justify-self-end flex justify-end w-50 mt-5">
                      <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                        </svg>
                        View
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ToolsPage;
