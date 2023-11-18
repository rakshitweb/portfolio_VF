import React from "react";
import classes from "./Wrapper.module.scss";

interface IWrapper {
  children?: React.ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: IWrapper) => {
  return <div className={`${classes.wrapper} ${className ? className : ""}`}>{children}</div>;
};
