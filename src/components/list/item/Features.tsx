import { List } from "@mui/material";
import Person, { Feature as FeatureEnum } from "../../../models/person";
import FeatureIcon from "../../FeatureIcon";
import { Feature } from '@drigofonte_org/base.ui.person.feature';

const Features: React.FC<{ person: Person }> = ({ person }) => {
  const { age, heightString, weightString, hair_color } = person;

  return (
    <List dense>
      <Feature label="age" value={age.toString()} icon={FeatureIcon(FeatureEnum.age)} />
      <Feature label="height" value={heightString} icon={FeatureIcon(FeatureEnum.height)} />
      <Feature label="weight" value={weightString} icon={FeatureIcon(FeatureEnum.weight)} />
      <Feature label="hair colour" value={hair_color} icon={FeatureIcon(FeatureEnum.hair_color)} />
    </List>
  );
};

export default Features;