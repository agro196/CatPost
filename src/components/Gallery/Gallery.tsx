import React from "react";
import cx from "clsx";
import styles from "./Gallery.module.scss";
import { Title } from "..";
import img1 from "../../assets/img/image1.jpg";
import img2 from "../../assets/img/image2.jpg";
import img3 from "../../assets/img/image3.jpg";

export type GalleryProps = React.HTMLAttributes<HTMLDivElement>;

export function Gallery({ className, ...props }: GalleryProps): JSX.Element {
  return (
    <section className={cx(className, styles.root)} {...props}>
      <Title className={styles.title} tag="h2" font="small">
        Довольные коты
      </Title>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div>
            <img
              className={styles.img}
              src={img1}
              width="335"
              height="224"
              alt="Фото котика"
            />
          </div>
        </li>
        <li className={styles.item}>
          <div>
            <img
              className={styles.img}
              src={img2}
              width="335"
              height="448"
              alt="Фото котика"
            />
          </div>
        </li>
        <li className={styles.item}>
          <div>
            <img
              className={styles.img}
              src={img3}
              width="335"
              height="224"
              alt="Фото котика"
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
