import { Box, Card, CardContent, CardHeader, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import Person from "../../models/person";

const Features: React.FC<{ person: Person }> = ({ person }) => {
  const { weight, hair_color, height, age } = person;

  return (
    <Card sx={{
        marginBottom: 2,
        p: 2,
        border: '1px #e0dfdc solid',
        borderRadius: 3
      }}
      elevation={0}
    >
      <CardHeader
        title="Characteristics"
        titleTypographyProps={{
          fontWeight: 200
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <ListItem>
            <ListItemIcon>
              <MonitorWeightOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="weight"
              secondary={weight}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PaletteOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Hair colour"
              secondary={hair_color}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HeightOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="height"
              secondary={height}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CakeOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="age"
              secondary={age}
            />
          </ListItem>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Features;