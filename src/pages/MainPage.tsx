import React from "react";
import { Container, Description, Form, Gallery, Header } from "../components";
import styles from "./MainPage.module.scss";

export function MainPage(): JSX.Element {
  return (
    <>
      <Header className={styles.header} />
      <main>
        <h1 className="visually-hidden">Главная страница Котопочты.</h1>
        <Container className={styles.container}>
          <Description className={styles.description} />
          <Form className={styles.form} />
          <Gallery className={styles.gallery} />
        </Container>
      </main>
    </>
  );
}
