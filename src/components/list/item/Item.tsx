import {
  Box,
  Divider
} from "@mui/material";
import React from "react";
import Person from "../../../models/person";
import Actions from './ItemActions';
import Features from "./Features";
import Header from "./Header";
import Professions from "./Professions";
import { Card } from "@drigofonte_org/base.ui.card";
import styles from "./Item.module.scss";

const Item: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <Card className={styles.itemcard}>
      <Actions person={person} />
      <Header person={person} />
      <Professions person={person} />
      <Divider light sx={{ mt: 2 }} />
      <Box sx={{ pt: 2 }}>
        <Features person={person} />
      </Box>
    </Card>
  );
};

export default Item;
