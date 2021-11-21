import React, { DetailedHTMLProps, FormHTMLAttributes, useState } from "react";
import cx from "clsx";
import styles from "./Form.module.scss";
import { Button, Checkbox, Container, TextField, Title } from "..";
import { ReactComponent as PawIcon } from "../../assets/img/paw.svg";

export type FormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export function Form({ className, ...props }: FormProps): JSX.Element {
  const [puinkIsChecked, setPuinkIsChecked] = useState<boolean>(false);
  const [yummiIsChecked, setYummiIsChecked] = useState<boolean>(false);
  return (
    <form className={cx(className, styles.root)} {...props}>
      <Container>
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
          <TextField tag={"input"} type="text" name="name">
            Ваше имя
          </TextField>
          <TextField
            tag={"input"}
            type="email"
            name="email"
            placeholder="youremail@catmail.org"
          >
            Email
          </TextField>
        </fieldset>
        <Button className={styles.button} variant="submit" icon={<PawIcon />}>
          Отправить
        </Button>
      </Container>
    </form>
  );
}
