import React from "react";
import { globalStyles } from "./styles/globalStyles";
import { Home } from "./Home";

export const App: React.FC = () => {
  globalStyles();
  return (
    <>
     <Home/>
    </>
  );
};
