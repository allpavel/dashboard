import React, { createContext } from "react";

type Props = {
    children: React.ReactNode;
};

const initialState = {
    chart: false,
    cart: false,
    userProfile: false,
    notification: false,
};

const StateContext = createContext<typeof initialState>(initialState);

export const ContextProvider: React.FC<Props> = ({ children }) => {
    return <StateContext.Provider value={initialState}>{children}</StateContext.Provider>;
};
