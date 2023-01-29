import React, { createContext, useEffect } from 'react';
import Constants from 'expo-constants';

// set baseURL using environment varibales -- use export BASE_URL=<name>
const baseURL = Constants.manifest?.extra?.baseUrl ?? 'http://192.168.1.20:3000/';

const initialState = baseURL;

export const APIContext = createContext(initialState);

// provides an instance of the API class to all children
export const APIProvider = ({ children }) => {
  const state = initialState;

  return (
    <APIContext.Provider
      value={
        state
      }
    >
      {children}
    </APIContext.Provider>
  );
};