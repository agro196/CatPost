import React, { DetailedHTMLProps, FormHTMLAttributes } from "react";
import cx from "clsx";
import styles from "./TextField.module.scss";

export type TextFieldProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  DetailedHTMLProps<
    FormHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > & {
    tag: "input" | "textarea";
    type?: "text" | "email";
  };

export function TextField({
  className,
  tag,
  children,
  type,
  ...props
}: TextFieldProps): JSX.Element {
  switch (tag) {
    case "input":
      return (
        <label className={cx(className, styles.inputRoot)}>
          {children && <span className={styles.label}>{children}</span>}
          <input type={type} className={styles.input} {...props} />
        </label>
      );
    case "textarea":
      return (
        <textarea
          className={cx(
            className,
            styles.textareaRoot,
            styles.input,
            styles.textarea
          )}
          {...props}
        />
      );
    default:
      return <></>;
  }
}
