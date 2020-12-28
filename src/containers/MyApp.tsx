import React, { useState, ChangeEvent } from "react";
import useDarkMode from "use-dark-mode";
import Sidebar from "./Sidebar";
import Home from "./Home";
import SearchResults from "./SearchResults";
import ToolsPage from "./ToolsPage";
import ScrollToTop from "./ScrollToTop";
import tools from "../tools.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./MyApp.css";

const MyApp: React.FC = () => {
  const darkMode = useDarkMode(undefined, { classNameDark: "dark", classNameLight: "light" });
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="flex">
        <Sidebar onSearchChange={setSearchQuery} />
        <div className="ml-64" style={{ minWidth: "1000px" }}>
          {searchQuery &&
            <SearchResults searchQuery={searchQuery} tools={
              tools.filter((tool) => {
                return tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  tool.description.toLowerCase().includes(searchQuery.toLowerCase());
              })} />
          }
          {!searchQuery &&
            <>
              <ScrollToTop />
              <Switch>
                <Route path="/tools">
                  <ToolsPage />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </>
          }
        </div>
      </div>
    </Router>
  );
};

export default MyApp;
