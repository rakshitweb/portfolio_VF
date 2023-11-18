import { Wrapper } from "../Wrapper";
import classes from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Wrapper className={classes.navbar__wrapper}></Wrapper>
    </nav>
  );
};
