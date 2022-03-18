import React, { ReactElement, FC, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main
    }
  })
);
interface Props {
    title: String
}

const Header: FC<Props> = ({ title }): ReactElement => {
    const classes = useStyles();

    useEffect(() => {
      fetch("http://localhost:5002/auth/login")
      .then(data => console.log(data))
    })
    return (
        <div className={classes.root}>
            {title}
        </div>
    );
};

export default Header;