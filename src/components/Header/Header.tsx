import React from "react";
import cx from "clsx";
import styles from "./Header.module.scss";
import { Button, Container } from "..";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function Header({ className, ...props }: HeaderProps): JSX.Element {
  return (
    <header className={cx(className, styles.root)} {...props}>
      <Container className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <a className={styles.navLink} href="#">
                Забрать кота себе
              </a>
            </li>
            <li className={styles.navListItem}>
              <a className={styles.navLink} href="#">
                Задонатить котов
              </a>
            </li>
            <li className={styles.navListItem}>
              <Button>Войти</Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
