import React from "react";
import cx from "clsx";
import styles from "./Container.module.scss";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({
  className,
  ...props
}: ContainerProps): JSX.Element {
  return <div className={cx(className, styles.root)} {...props} />;
}
