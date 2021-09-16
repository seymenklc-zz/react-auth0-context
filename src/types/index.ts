export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type PostsContextData = {
    data: Post[];
    loading: boolean;
    error: string;
};
