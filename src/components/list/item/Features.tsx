import { List } from "@mui/material";
import Person, { Feature as FeatureEnum } from "../../../models/person";
import { Feature } from '@drigofonte_org/base.ui.person.feature';
import FeatureIcon from '../../FeatureIcon';

const Features: React.FC<{ person: Person }> = ({ person }) => {
  const { age, heightString, weightString, hair_color } = person;

  return (
    <List dense>
      <Feature label="age" value={age.toString()} icon={<FeatureIcon feature={FeatureEnum.age} />} />
      <Feature label="height" value={heightString} icon={<FeatureIcon feature={FeatureEnum.height} />} />
      <Feature label="weight" value={weightString} icon={<FeatureIcon feature={FeatureEnum.weight} />} />
      <Feature label="hair colour" value={hair_color} icon={<FeatureIcon feature={FeatureEnum.hair_color} />} />
    </List>
  );
};

export default Features;