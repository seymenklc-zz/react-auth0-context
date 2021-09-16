import React from "react";

import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "../styles";

type PostProps = {
    title: string;
    body: string;
};

const Post: React.FC<PostProps> = ({ title, body }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={8}>
            <div>
                <Typography variant='h6' color='primary'>
                    {title.toUpperCase()}
                </Typography>
            </div>
            <div>
                <Typography variant='body1'>{body}</Typography>
            </div>
        </Paper>
    );
};

export default Post;
