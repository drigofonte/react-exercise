import { Box, Card, CardContent, CardHeader, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import Person from '../../../models/person';
import Features from './Features';
import Header from './Header';
import Professions from './Professions';
import '../../Card.css';
import './Item.css';

const Item: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <Card
      className="base-card item-card"
      elevation={0}
      sx={{
        position: 'relative'
      }}
    >
      <CardHeader
        action={
          <Link
            to={`/people/${person.id}`}
            style={{
              textDecoration: 'none',
              color: 'initial'
            }}
          >
            <IconButton aria-label="view profile">
              <MoreVertIcon />
            </IconButton>
          </Link>
          
        }
        sx={{
          position: 'absolute',
          right: '0'
        }}
      />
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