import { Avatar, Box, Card, CardContent, Chip, Typography } from "@mui/material";
import Person from "../../models/person";

const Details: React.FC<{ person: Person }> = ({ person }) => {
  const { name, thumbnail, professions } = person;

  return (
    <Card sx={{
        marginBottom: 2,
        p: 2,
        border: '1px #e0dfdc solid',
        borderRadius: 3
      }}
      elevation={0}
    >
      <CardContent>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Avatar sx={{
            width: 150,
            height: 150
          }} src={thumbnail} />
          <Typography variant="h5" sx={{
            mt: 3,
            fontWeight: 'bold',
            letterSpacing: '0.08em'
          }}>{name}</Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              mt: 2
            }}
          >
            {professions.map((p) => (
              <Chip 
                key={p}
                sx={{ mr: '6px' }}
                label={p} 
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Details;