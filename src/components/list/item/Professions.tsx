import { Box, Chip } from "@mui/material";
import Person from "../../../models/person";

const Professions: React.FC<{ person: Person }> = ({ person }) => {
  const { professions } = person;
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        minHeight: 60,
        maxHeight: 60
      }}
      justifyContent="center"
      alignItems="Center"
    >
      {professions.map((p) => (
        <Chip 
          key={p}
          sx={{ mx: '2px', my: '2px' }}
          size="small" 
          label={p}
          color="primary"
        />
      ))}
    </Box>
  );
};

export default Professions;