import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/components.js";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between">
        <div className="w-full">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
