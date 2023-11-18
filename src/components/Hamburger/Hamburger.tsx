import classes from "./Hamburger.module.scss";

interface IHamburger {
  open: boolean;
  className?: string;
  onClick: () => void;
}

export const Hamburger = ({ open, className, onClick }: IHamburger) => {
  return (
    <div
      className={`${classes.hamburger} ${open ? classes.hamburger__close : ""} ${className}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
