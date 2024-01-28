import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/components.js";

const App = () => {
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
