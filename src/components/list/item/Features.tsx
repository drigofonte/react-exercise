import { List } from "@mui/material";
import Person, { Feature as FeatureEnum } from "../../../models/person";
import FeatureIcon from "../../FeatureIcon";
import { Feature } from '@drigofonte/personal.ui.person.feature';

const Features: React.FC<{ person: Person }> = ({ person }) => {
  const { age, heightString, weightString, hair_color } = person;

  return (
    <List dense>
      <Feature label="age" text={age.toString()} icon={FeatureIcon(FeatureEnum.age)} />
      <Feature label="height" text={heightString} icon={FeatureIcon(FeatureEnum.height)} />
      <Feature label="weight" text={weightString} icon={FeatureIcon(FeatureEnum.weight)} />
      <Feature label="hair colour" text={hair_color} icon={FeatureIcon(FeatureEnum.hair_color)} />
    </List>
  );
};

export default Features;