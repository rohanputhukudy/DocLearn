import React, { createContext, useContext, useState } from 'react';
import { APIContext } from './APIContext';

const initialState = {
  posts: [],
  fetchPosts: () => {}
};

export const PostsContext = createContext(initialState);

export const PostsProvider = ({ children }) => {
  const [state ,setState] = useState(initialState);
  const serverURL = useContext(APIContext);

  function fetchPosts() {
    const response = fetch(serverURL, {
      method: 'GET',
    });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        fetchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};