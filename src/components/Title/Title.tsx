import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import cx from "clsx";
import styles from "./Title.module.scss";

export type HtagProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement> & {
    tag: "h1" | "h2" | "h3" | "legend";
    font: "large" | "medium" | "small";
    children: ReactNode;
  };

export function Title({
  className,
  tag,
  children,
  font,
  ...props
}: HtagProps): JSX.Element {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cx(className, styles[font])} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cx(className, styles[font])} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cx(className, styles[font])} {...props}>
          {children}
        </h3>
      );
    case "legend":
      return (
        <legend className={cx(className, styles[font])} {...props}>
          {children}
        </legend>
      );
    default:
      return <></>;
  }
}
