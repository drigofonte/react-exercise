import { Avatar, Box, Card, CardContent, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import React from 'react';
import Person from '../models/person';

const PersonItem: React.FC<{ person: Person }> = ({ person }) => {
  const { name, thumbnail, professions } = person;
  return (
    <Card sx={{
      marginBottom: 2, 
      maxWidth: 360,
      minWidth: 320
    }}>
      <CardContent sx={{ margin: 'auto' }}>
        <Avatar sx={{
          width: 60,
          height: 60, 
          margin: 'auto'
        }} src={thumbnail} />
        <Box
          p={2}
          flex={'auto'}
          justifyContent="center"
        >
          <Typography variant="h6" sx={{
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: '0.1em',
            textAlign: 'center'
          }}>{name}</Typography>
        </Box>
        <Box
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            pt: 1,
            pb: 4
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              minHeight: 60,
              maxHeight: 60
            }}
            justifyContent="center"
            alignItems="Center"
          >
            {professions.map((p) => (
              <Chip 
                key={p}
                sx={{ mx: '2px', my: '2px' }}
                size="small" 
                label={p} 
              />
            ))}
          </Box>
        </Box>

        <Divider light />

        <Box
          sx={{
            pt: 2
          }}
        >
          <List dense>
            <ListItem>
              <ListItemIcon>
                <MonitorWeightOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="weight"
                secondary="39"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PaletteOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Hair colour"
                secondary="green"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HeightOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="height"
                secondary="1,10m"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CakeOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="age"
                secondary="288"
              />
            </ListItem>
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PersonItem;