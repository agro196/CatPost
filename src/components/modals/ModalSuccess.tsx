import { Button, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import React from "react";

const ModalSuccess = (): JSX.Element => {
  return (
    <div>
      <CheckCircleOutlinedIcon />
      <Typography variant="h2" component="h2">
        Всё получилось
      </Typography>
      <Typography>
        Через минуту ваша карта появится в кошельке - Вы увидете её в разделе
        "Банковские карты"
      </Typography>
      <Button
        sx={{
          mt: 4,
          textTransform: "none",
          bgcolor: "LightGrey",
          color: "black",
          "&:hover": {
            bgcolor: "silver",
          },
        }}
        variant="contained"
      >
        Обратно к картам
      </Button>
    </div>
  );
};

export default ModalSuccess;
