import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CardListItem from "../CardListItem";

const CardList = (): JSX.Element => {
  return (
    <Box mb={4}>
      <Typography variant="h4" component="h2" mb={4}>
        Мои карты
      </Typography>
      <ul>
        <CardListItem></CardListItem>
      </ul>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          mt: 4,
          textTransform: "none",
          bgcolor: "#6626c7",
        }}
      >
        Привязать карту
      </Button>
    </Box>
  );
};

export default CardList;
