import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '0',
    margin: '48px 0 16px',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 300,
  },
});

export default function MDXH2(props: any) {
  const classes = useStyles();
  return <Typography variant="h4" className={classes.root} {...props} />;
}
