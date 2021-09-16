import React, { createContext } from 'react';
import { PostsContextData } from '../types';
import { useFetchPosts } from '../hooks/useFetchPosts';

const postsContextDefaultValue: PostsContextData = {
    data: [],
    loading: false,
    error: ''
};

export const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);

type PostsContextProviderProps = {
    children: React.ReactNode;
};

const PostsContextProvider = ({ children }: PostsContextProviderProps) => {
    const postsContextValue = useFetchPosts();

    return (
        <PostsContext.Provider value={postsContextValue}>
            {children}
        </PostsContext.Provider>
    );
};

export default PostsContextProvider;