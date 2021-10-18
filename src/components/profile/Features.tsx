import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import Person, { Feature as FeatureEnum } from "../../models/person";
import './Profile.css';
import '../Card.css';
import FeatureIcon from "../FeatureIcon";
import { Feature } from '@drigofonte/personal.ui.person.feature';

const Features: React.FC<{ person: Person }> = ({ person }) => {
  const { weightString, hair_color, heightString, age } = person;

  return (
    <Card 
      className="base-card profile-card"
      elevation={0}
    >
      <CardHeader
        title="Characteristics"
        titleTypographyProps={{
          fontWeight: 200
        }}
      />
      <CardContent>
        <Grid
          container
          sx={{
            flexDirection: {
              xs: 'column',
              md: 'row'
            }
          }}
        >         
          <Grid item xs>
            <Feature label="age" text={age.toString()} icon={FeatureIcon(FeatureEnum.age)} />
          </Grid>
          <Grid item xs>
            <Feature label="height" text={heightString} icon={FeatureIcon(FeatureEnum.height)} />
          </Grid>
          <Grid item xs>
            <Feature label="weight" text={weightString} icon={FeatureIcon(FeatureEnum.weight)} />
          </Grid>
          <Grid item xs>
            <Feature label="hair colour" text={hair_color} icon={FeatureIcon(FeatureEnum.hair_color)} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Features;