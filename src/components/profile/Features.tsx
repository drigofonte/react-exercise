import { Grid } from "@mui/material";
import Person, { Feature as FeatureEnum } from "../../models/person";
import { Feature } from '@drigofonte_org/base.ui.person.feature';
import { ProfileSection } from '@drigofonte_org/base.ui.person.profile-section';
import FeatureIcon from '../FeatureIcon';

const Features: React.FC<{ person: Person }> = ({ person }) => {
  const { weightString, hair_color, heightString, age } = person;

  return (
    <ProfileSection title="Characteristics">
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
          <Feature label="age" value={age.toString()} icon={<FeatureIcon feature={FeatureEnum.age} />} />
        </Grid>
        <Grid item xs>
          <Feature label="height" value={heightString} icon={<FeatureIcon feature={FeatureEnum.height} />} />
        </Grid>
        <Grid item xs>
          <Feature label="weight" value={weightString} icon={<FeatureIcon feature={FeatureEnum.weight} />} />
        </Grid>
        <Grid item xs>
          <Feature label="hair colour" value={hair_color} icon={<FeatureIcon feature={FeatureEnum.hair_color} />} />
        </Grid>
      </Grid>
    </ProfileSection>
  );
}

export default Features;