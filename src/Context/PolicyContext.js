import React, {useState, useContext, createContext} from "react";

const PolicyContext = createContext();

export const PolicyProvider = ({children}) => {
    const [selectedPolicy, setSelectedPolicy] = useState(null);
    const [selectedPolicyLoading, setSelectedPolicyLoading] = useState(false);

    return(
        <PolicyContext.Provider value={{selectedPolicy, setSelectedPolicy, selectedPolicyLoading, setSelectedPolicyLoading}}>
            {children}
        </PolicyContext.Provider>
    )
}


export const usePolicy = () => useContext(PolicyContext);