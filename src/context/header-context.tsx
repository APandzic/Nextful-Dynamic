import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import { Theme } from "src/types";

type NavigationType = any[] | null;

interface UserInterface {
    subnavigationLinks: NavigationType,
    setSubnavigationLinks: (state: NavigationType) => void;
    theme: Theme;
}

interface Props {
    children: React.ReactNode,
    theme: Theme;
};

const Context = createContext({} as UserInterface);

const HeaderProvider = ({ children, theme } : Props) => {
    const [subnavigationLinks, setSubnavigationLinks] = useState<NavigationType>(null);

    return <Context.Provider value={{subnavigationLinks, setSubnavigationLinks, theme}}>{children}</Context.Provider>;
};

export default HeaderProvider;

// eslint-disable-next-line func-style
export function useHeaderContext() {
    return useContext(Context);
}
