import React, { createContext, useState, useContext } from 'react';
import { getContent, setContent as setContentInStorage } from '@/lib/landingPageContent';

const LandingPageContext = createContext();

export const useLandingPageContent = () => useContext(LandingPageContext);

export const LandingPageProvider = ({ children }) => {
  const [content, setContentState] = useState(getContent());

  const updateContent = (newContent) => {
    setContentInStorage(newContent);
    setContentState(newContent);
  };

  const value = { content, updateContent };

  return (
    <LandingPageContext.Provider value={value}>
      {children}
    </LandingPageContext.Provider>
  );
};
