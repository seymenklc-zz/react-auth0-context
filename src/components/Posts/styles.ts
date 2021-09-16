import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: 20
        },
        paper: {
            padding: 10,
            marginBottom: 15,
            cursor: 'pointer',
        }
    }),
);
