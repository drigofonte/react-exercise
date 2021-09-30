import { Avatar, Box, Card, CardContent, Chip, Typography } from "@mui/material";
import Person from "../../models/person";
import './Profile.css';
import '../Card.css';

const Details: React.FC<{ person: Person }> = ({ person }) => {
  const { name, thumbnail, professions } = person;

  return (
    <Card 
      className="profile-card base-card"      
      elevation={0}
      sx={{
        borderRadius: '0 0 12px 12px !important'
      }}
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
          <Typography variant="h4" sx={{
            mt: 3,
            fontWeight: 700
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
                sx={{ mr: '6px', mt: '12px' }}
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