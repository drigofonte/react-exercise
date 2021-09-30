import { Box, Card, CardContent, Divider } from '@mui/material';
import React from 'react';
import Person from '../../../models/person';
import Features from './Features';
import Header from './Header';
import Professions from './Professions';
import '../../Card.css';

const Item: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <Card
      className="base-card"
      elevation={0}
      sx={{
        marginBottom: 2, 
        maxWidth: 360,
        minWidth: 320
      }}
    >
      <CardContent sx={{ margin: 'auto' }}>
        <Header person={person} />
        <Professions person={person} />
        <Divider light sx={{ mt: 2 }} />
        <Box sx={{ pt: 2 }}>
          <Features person={person} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Item;