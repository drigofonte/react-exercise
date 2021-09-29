import { Box, Card, CardContent, CardHeader, Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import Person from "../../models/person";

const Features: React.FC<{ person: Person }> = ({ person }) => {
  const { weightString, hair_color, heightString, age } = person;

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
        <Grid container>
          <Grid
            item
            xs
            sx={{
              pr: 1
            }}
          >
            <ListItem>
              <ListItemIcon>
                <MonitorWeightOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="weight"
                secondary={weightString}
              />
            </ListItem>
          </Grid>
          <Grid
            item
            xs
            sx={{
              pr: 1
            }}
          >
            <ListItem>
              <ListItemIcon>
                <PaletteOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="hair colour"
                secondary={hair_color}
              />
            </ListItem>
          </Grid>
          <Grid
            item
            xs
            sx={{
              pr: 1
            }}
          >
            <ListItem>
              <ListItemIcon>
                <HeightOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="height"
                secondary={heightString}
              />
            </ListItem>
          </Grid>
          <Grid
            item
            xs
            sx={{
              pr: 1
            }}
          >
            <ListItem>
              <ListItemIcon>
                <CakeOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="age"
                secondary={age}
              />
            </ListItem>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Features;