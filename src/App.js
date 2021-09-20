import ComA from "./ComA";
import React, { createContext } from "react";    {/* 1 - stap import kiya  */}

const FirstName = createContext();   {/* 2 - create kiya */}
const LastName = createContext();    {/* 5&6 - create kiya */}


const App = () => {
  return (
    <>
      <FirstName.Provider value={"David"}>   {/* stap 3 - provider set kiya */}
        <LastName.Provider value={"Rana"}>
        <ComA />              {/* stap 4 - component use kiya  */}
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };
