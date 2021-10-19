import { Avatar, Box, Chip, Typography } from "@mui/material";
import Person from "../../models/person";
import { ProfileSection } from '@drigofonte_org/base.ui.person.profile-section';

const Details: React.FC<{ person: Person }> = ({ person }) => {
  const { name, thumbnail, professions } = person;

  return (
    <ProfileSection>
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

        <Typography variant="h6" sx={{
          mt: 2,
          fontWeight: 200
        }}>Professions</Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
          }}
        >
          {professions.map((p) => (
            <Chip 
              key={p}
              sx={{ mr: '6px', mt: '12px' }}
              label={p} 
              color="primary"
            />
          ))}
        </Box>
      </Box>
    </ProfileSection>
  );
};

export default Details;