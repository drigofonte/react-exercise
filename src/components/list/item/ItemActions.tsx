import { useEffect, useState } from "react";
import { CardActions, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import Person from "../../../models/person";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from '@mui/icons-material/Star';

const favouritesKey = 'favourites';

const fetchFavourites = () => {
  return JSON.parse(localStorage.getItem(favouritesKey) ?? '{}');
}

const storeFavourites = (isFavourite: boolean, { id }: Person) => {
  const favourites = fetchFavourites();
  if (isFavourite) {
    favourites[id] = true;
  } else {
    delete favourites[id];
  }

  localStorage.setItem(favouritesKey, JSON.stringify(favourites));
}

const ItemActions: React.FC<{ person: Person }> = ({ person }) => {
  const [ favourite, setFavourite ] = useState(false);

  const toggleFavouriteHandler = () => {
    const isFavourite = !favourite;
    setFavourite(isFavourite);
    storeFavourites(isFavourite, person);
  };

  useEffect(() => {
    const favourites = fetchFavourites();
    setFavourite(favourites[person.id]);
  }, [person.id]);

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