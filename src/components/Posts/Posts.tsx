import { useContext } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

import { PostsContext } from "../../context/posts";

import Post from "./Post/Post";

const Posts = () => {
    const classes = useStyles();
    const { user } = useAuth0();
    const { data, loading, error } = useContext(PostsContext);

    return (
        <Container className={classes.container} maxWidth='md'>
            {user && !loading && !error ? data?.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
            )) : (
                <Typography variant='h6' color='textSecondary' align='center'>
                    Login to see posts
                </Typography>
            )}
        </Container>
    );
};

export default Posts;
