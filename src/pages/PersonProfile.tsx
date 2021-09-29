import { useParams } from 'react-router-dom';
import Person from '../models/person';
import { useStore } from '../store/store';

import Details from '../components/profile/Details';
import { Box } from '@mui/material';

type PersonProfileParams = {
  id: string
};

const PersonProfile = () => {
  const params = useParams<PersonProfileParams>();
  const [ state ] = useStore();
  const { people }: { people?: Person[] } = state;
  const numId = Number(params.id);
  const person = people!.find((p) => p.id === numId);

  let content = <div>Could not find this person</div>;
  if (person) {
    content = 
      <Box sx={{
        display: 'flex'
      }}>
        <Box sx={{
          flexGrow: 1
        }}>
          <Details person={person} />
        </Box>
      </Box>;
  }

  return content;
};

export default PersonProfile;