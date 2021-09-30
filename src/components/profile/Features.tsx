import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import Person, { Feature } from "../../models/person";
import ListItemFeature from "../ListItemFeature";

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
            {ListItemFeature('age', age, Feature.age)}
          </Grid>
          <Grid item xs>
            {ListItemFeature('height', heightString, Feature.height)}
          </Grid>
          <Grid item xs>
            {ListItemFeature('weight', weightString, Feature.weight)}
          </Grid>
          <Grid item xs>
            {ListItemFeature('hair colour', hair_color, Feature.hair_color)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Features;