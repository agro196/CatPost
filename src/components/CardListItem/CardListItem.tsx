import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactComponent as McLogo } from "../icons/mc-logo.svg";
import { ReactComponent as TinkoffLogo } from "../icons/tinkof.svg";
import React from "react";

const CardListItem = (): JSX.Element => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 200,
        backgroundColor: "black",
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TinkoffLogo width="60px" height="60px" />
          <McLogo width="50px" height="50px" />
        </Box>
        <Typography sx={{ fontSize: 20, mt: 4 }} color="gray"></Typography>
      </CardContent>
    </Card>
  );
};

export default CardListItem;
