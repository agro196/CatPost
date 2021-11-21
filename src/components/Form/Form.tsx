import React, { DetailedHTMLProps, FormHTMLAttributes, useState } from "react";
import cx from "clsx";
import styles from "./Form.module.scss";
import { Button, Checkbox, TextField, Title } from "..";
import { ReactComponent as PawIcon } from "../../assets/img/paw.svg";

export type FormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export function Form({ className, ...props }: FormProps): JSX.Element {
  const [puinkIsChecked, setPuinkIsChecked] = useState<boolean>(false);
  const [yummiIsChecked, setYummiIsChecked] = useState<boolean>(true);
  return (
    <section className={cx(className, styles.root)} {...props}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Title className={styles.legend} tag={"legend"} font={"small"}>
            Сообщение
          </Title>
          <TextField
            tag={"textarea"}
            name="message"
            placeholder="Что-нибудь хорошее"
            className={styles.textarea}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <Title className={styles.legend} tag={"legend"} font={"small"}>
            Дополнительные опции
          </Title>
          <Checkbox
            onChange={() => setPuinkIsChecked((val) => !val)}
            checked={puinkIsChecked}
            name="puink"
            className={styles.checkbox}
          >
            Сделать пуньк в нос
          </Checkbox>
          <Checkbox
            onChange={() => setYummiIsChecked((val) => !val)}
            checked={yummiIsChecked}
            name="yummi"
            className={styles.checkbox}
          >
            Угостить вкусняшкой
          </Checkbox>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <Title className={styles.legend} tag={"legend"} font={"small"}>
            Контакты для связи
          </Title>
          <TextField
            className={styles.input}
            tag={"input"}
            type="text"
            name="name"
          >
            Ваше имя
          </TextField>
          <TextField
            className={styles.input}
            tag={"input"}
            type="email"
            name="email"
            placeholder="youremail@catmail.org"
          >
            Email
          </TextField>
          <small className={styles.smallText}>
            Мы вышлем вам фото довольного кошачьего лица
          </small>
        </fieldset>
        <Button
          className={styles.button}
          variant="submit"
          icon={<PawIcon />}
          type="button"
        >
          Отправить
        </Button>
      </form>
    </section>
  );
}
