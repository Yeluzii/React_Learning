import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

import "./pages/nav.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
