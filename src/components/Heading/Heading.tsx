import classes from "./Heading.module.scss";

interface IHeading {
  title: string;
  functional?: boolean;
  variant?: string;
  className?: string;
}

export const Heading = ({ title, className, functional, variant }: IHeading) => {
  const ElementTag = `${variant || "h4"}` as keyof JSX.IntrinsicElements;
  return (
    <ElementTag
      className={`${classes.heading} ${functional ? classes.heading__functional : ""} ${
        className ? className : ""
      }`}
    >
      {title}
    </ElementTag>
  );
};
