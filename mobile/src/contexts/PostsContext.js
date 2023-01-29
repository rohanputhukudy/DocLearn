import React, { createContext, useContext, useEffect, useState } from 'react';
import { APIContext } from './APIContext';

export const PostsContext = createContext([]);

export const PostsProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const serverURL = useContext(APIContext);

  const fetchPosts = async() => {
    await fetch(serverURL)
      .then(res => res.json())
      .then(data => setState(data));
    console.log(state);
  };

  useEffect(() => {
    fetchPosts();
  });

  return (
    <PostsContext.Provider
      value={state}
    >
      {children}
    </PostsContext.Provider>
  );
};