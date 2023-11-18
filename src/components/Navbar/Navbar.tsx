import { useState } from "react";
import { Wrapper } from "../Wrapper";
import { Heading } from "../Heading/Heading";
import { Hamburger } from "../Hamburger";
import classes from "./Navbar.module.scss";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className={classes.navbar}>
      <Wrapper className={classes.navbar__wrapper}>
        <div className={classes.navbar__header}>
          <Heading title="Rakshit" />
          <Hamburger
            className={classes.navbar__hamburger}
            open={openMenu}
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
          />
        </div>
        <div className={`${classes.navbar__menu} ${openMenu ? classes.navbar__menu__open : ""}`}>
          <Heading className={classes.navbar__menu__item} title="about" functional />
          <Heading className={classes.navbar__menu__item} title="work" functional />
          <Heading className={classes.navbar__menu__item} title="academic" functional />
          <Heading className={classes.navbar__menu__item} title="contact" functional />
        </div>
      </Wrapper>
    </nav>
  );
};
