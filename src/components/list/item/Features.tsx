import { List } from "@mui/material";
import Person, { Feature } from "../../../models/person";
import ListItemFeature from "../../ListItemFeature";

const Features: React.FC<{ person: Person }> = ({ person }) => {
  const { age, heightString, weightString, hair_color } = person;

  return (
    <List dense>
      {ListItemFeature('age', age, Feature.age)}
      {ListItemFeature('height', heightString, Feature.height)}
      {ListItemFeature('weight', weightString, Feature.weight)}
      {ListItemFeature('hair colour', hair_color, Feature.hair_color)}
    </List>
  );
};

export default Features;