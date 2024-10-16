"use client"; 

// Environment
import { createContext, useContext, useState, useEffect } from "react";
import { useActiveWallet, useActiveWalletChain, useWalletBalance   } from "thirdweb/react";


// Create the context
const AppContext = createContext();

// Correct the hook usage
export const useAppContext = () => useContext(AppContext);



const AppContextProvider = ({ children }) => {


    // const wallet = useActiveWallet();
    // const activeChain = useActiveWalletChain();


    // const { data: balance, isLoading, isError } = useWalletBalance({
    //     chain,
    //     address,
    //     client,
    //   });


  // Define the context value
  const contextValue = {
    // Add more vars and functions here
    "hello": "world",
  };

  const hello = "helllo";

  return (  
    // Pass down contextValue to children
    <AppContext.Provider value={hello}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
