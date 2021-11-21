import React, { DetailedHTMLProps, FormHTMLAttributes } from "react";
import cx from "clsx";
import styles from "./Checkbox.module.scss";

export type CheckboxProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  checked?: boolean;
};

export function Checkbox({
  className,
  checked,
  children,
  ...props
}: CheckboxProps): JSX.Element {
  return (
    <label
      className={cx(className, styles.root, checked && styles.rootChecked)}
    >
      <input
        checked={checked}
        type="checkbox"
        className={cx(styles.input, "visually-hidden")}
        {...props}
      />
      {children}
    </label>
  );
}
