import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        name: {
            marginLeft: 10,
        },
        iconButton: {
            borderRadius: 0
        },
        container: {
            marginTop: 10
        },
        appbar: {
            borderRadius: 10
        },
        button: {
            backgroundColor: '#fefefe',
            padding: 5,
            borderRadius: 5
        }
    }),
);
