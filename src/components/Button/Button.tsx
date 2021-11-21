import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cx from "clsx";
import styles from "./Button.module.scss";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: React.ReactNode;
  variant?: "submit";
  children?: React.ReactNode;
};

export function Button({
  className,
  icon,
  children,
  variant,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cx(
        className,
        styles.root,
        variant === "submit" && styles.variantSubmit
      )}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
