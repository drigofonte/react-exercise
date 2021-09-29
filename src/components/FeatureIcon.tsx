import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

import { Feature } from "../models/person";

const FeatureIcon = (feature: Feature) => {
  switch (feature) {
    case Feature.height:
      return <HeightOutlinedIcon />;
    case Feature.weight:
      return <MonitorWeightOutlinedIcon />;
    case Feature.age:
      return <CakeOutlinedIcon />;
    case Feature.hair_color:
      return <PaletteOutlinedIcon />;
  }
}

export default FeatureIcon;