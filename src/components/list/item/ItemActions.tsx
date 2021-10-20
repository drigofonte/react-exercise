import { useState } from "react";
import { CardActions, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Person from "../../../models/person";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from '@mui/icons-material/Star';

const ItemActions: React.FC<{ person: Person }> = ({ person }) => {
  const [ favourite, setFavourite ] = useState(false);

  const toggleFavouriteHandler = () => {
    setFavourite(!favourite);
  };

  return (
    <CardActions
      disableSpacing
      sx={{
        p: 0,
        justifyContent: 'flex-end'
      }}
    >
      <IconButton onClick={toggleFavouriteHandler} aria-label="Mark as favourite">
        {!favourite && <StarOutlineIcon />}
        {favourite && <StarIcon color="warning" />}
      </IconButton>
      <Link
        to={`/people/${person.id}`}
      >
        <IconButton aria-label="View person profile">
          <MoreVertIcon />
        </IconButton>
      </Link>
    </CardActions>
  );
};

export default ItemActions;