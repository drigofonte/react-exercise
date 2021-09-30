import { Avatar, Box, Typography } from "@mui/material";
import Person from "../../../models/person";

const Header: React.FC<{ person: Person }> = ({ person }) => {
  const { name, thumbnail } = person;
  
  return (
    <Box
      p={2}
      flex={'auto'}
      justifyContent="center"
    >
      <Avatar sx={{
        width: 60,
        height: 60, 
        margin: 'auto'
      }} src={thumbnail} />
      <Typography variant="h6" sx={{
        mt: 1,
        fontWeight: 700,
        textAlign: 'center'
      }}>{name}</Typography>
    </Box>
  );
};

export default Header;