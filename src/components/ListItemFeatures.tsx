import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Feature } from "../models/person";
import FeatureIcon from "./FeatureIcon";

const ListItemFeature = (label: string, value: string | number, feature: Feature) => (
  <ListItem>
    <ListItemIcon>
      {FeatureIcon(feature)}
    </ListItemIcon>
    <ListItemText
      primary={label}
      secondary={value}
    />
  </ListItem>
);

export default ListItemFeature;