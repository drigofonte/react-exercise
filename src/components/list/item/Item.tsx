import { Box, CardHeader, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import Person from '../../../models/person';
import Features from './Features';
import Header from './Header';
import Professions from './Professions';
import { Card } from '@drigofonte_org/base.ui.card';
import styles from './Item.module.scss';

const Item: React.FC<{ person: Person }> = ({ person }) => {
  const header = (<CardHeader
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
    />);

  return (
    <Card
      className={styles.itemcard}
      header={header}
    >
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