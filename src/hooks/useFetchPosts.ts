import axios from "axios";
import { useEffect, useState } from "react";
import { Post, PostsContextData } from "../types";

export function useFetchPosts(): PostsContextData {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading(true);
        axios
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: 10
                }
            })
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}