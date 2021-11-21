import React from "react";
import cx from "clsx";
import styles from "./Description.module.scss";
import { Container, Title } from "..";

export type DescriptionProps = React.HTMLAttributes<HTMLDivElement>;

export function Description({
  className,
  ...props
}: DescriptionProps): JSX.Element {
  return (
    <section className={cx(className, styles.root)} {...props}>
      <Container>
        <Title className={styles.title} tag="h2" font="medium">
          Как это работает?
        </Title>
        <p className={styles.text}>
          Наши коты любят, когда с ними разговаривают. Напишите письмо, и мы
          прочитаем его котам, когда они придут почесать пузо.
        </p>
        <Title className={styles.title} tag="h2" font="medium">
          Что передать котам?
        </Title>
        <p className={styles.text}>
          Можно рассказать где вы видели вкусных мышей, какого размера синицы
          прилетели в город, или просто интересную историю из жизни.
        </p>
      </Container>
    </section>
  );
}
