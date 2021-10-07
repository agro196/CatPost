import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as McLogo } from "../icons/mc-logo.svg";
import { ReactComponent as MirLogo } from "../icons/mir-logo.svg";
import { ReactComponent as VisaLogo } from "../icons/visa-icon.svg";

const BindCardForm = (): JSX.Element => {
  const [card, setCard] = useState({
    cardNumber: "",
    cardDate: "",
    cvc: "",
  });

  const onCardNumberChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCard((state) => ({ ...state, cardNumber: evt.target.value }));
  };
  const onCardDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCard((state) => ({ ...state, cardDate: evt.target.value }));
  };
  const onCvcChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCard((state) => ({ ...state, cvc: evt.target.value }));
  };
  return (
    <Box mb={4}>
      <Typography variant="h4" component="h2" mb={4}>
        Привязка банковской карты
      </Typography>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 350,
          minHeight: 200,
          borderRadius: 4,
        }}
      >
        <CardContent component="form">
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <McLogo width="50px" height="50px" />
            <VisaLogo width="50px" height="50px" />
            <MirLogo width="50px" height="50px" />
          </Box>
          <TextField
            size="small"
            fullWidth
            placeholder="Номер карты"
            id="cardNumber"
            name="cardNumber"
            value={card.cardNumber}
            onChange={onCardNumberChange}
          />
          <Box
            display="flex"
            component="div"
            justifyContent="space-between"
            mt={4}
          >
            <TextField
              sx={{
                width: 80,
              }}
              size="small"
              placeholder="ММ/ГГ"
              id="cardDate"
              name="cardDate"
              value={card.cardDate}
              onChange={onCardDateChange}
            />
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FormHelperText
                sx={{
                  width: 80,
                  mr: 1,
                  textAlign: "right",
                  lineHeight: "14px",
                  fontSize: "10px",
                }}
              >
                Три цифры на обороте
              </FormHelperText>
              <TextField
                id="cvc"
                name="cvc"
                sx={{
                  width: 80,
                }}
                size="small"
                placeholder="CVC"
                value={card.cvc}
                onChange={onCvcChange}
              />
            </FormControl>
          </Box>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="space-between" maxWidth={350}>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            textTransform: "none",
            bgcolor: "LightGrey",
            color: "black",
          }}
        >
          Отменить
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            mt: 4,
            textTransform: "none",
            bgcolor: "#6626c7",
          }}
          disabled
        >
          Продолжить
        </Button>
      </Box>
    </Box>
  );
};

export default BindCardForm;
