import React from 'react';
// import '../css/NotFoundPage.css'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    main: {
        display: 'table',
        width: '100%',
        height: '100vh',
        'text-align': 'center',
        'font-family': 'Lato, sans-serif',
        color: '#888',
    },
    fof: {
        display: 'table-cell',
        'vertical-align': 'middle',
    },
    h1: { 'font-size': '50px', display: 'inline-block', 'padding-right': '12px' },
});

function NotFoundPage() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div className={classes.fof}>
                <h1 className={classes.h1}>404</h1>
                <p>Página não encontrada</p>
            </div>
        </div>
    );
}

export default NotFoundPage;
