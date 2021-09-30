import { Box, Card, CardContent, Divider } from '@mui/material';
import React from 'react';
import Person from '../../../models/person';
import Features from './Features';
import Header from './Header';
import Professions from './Professions';

const Item: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <Card
      elevation={0}
      sx={{
        marginBottom: 2, 
        maxWidth: 360,
        minWidth: 320,
        borderRadius: 3,
        border: '1px #e0dfdc solid'
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