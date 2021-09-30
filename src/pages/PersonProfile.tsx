import { NavLink, useParams } from 'react-router-dom';
import Person from '../models/person';
import { useStore } from '../store/store';

import Details from '../components/profile/Details';
import Features from '../components/profile/Features';
import Friends from '../components/profile/Friends';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

type PersonProfileParams = {
  id: string
};

const PersonProfile = () => {
  const params = useParams<PersonProfileParams>();
  const [ state ] = useStore();
  const { people }: { people?: Person[] } = state;
  const numId = Number(params.id);
  const person = people!.find((p) => p.id === numId);

  let content = <div></div>;
  if (person) {
    content = 
      <Box>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
        >
          <Toolbar>
            <NavLink
              to="/people"
              style={{
                textDecoration: 'none',
                color: 'initial'
              }}
            >
              <Button startIcon={<GridViewOutlinedIcon />}>
                View people
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 4,
          px: 2
        }}>
          <Box sx={{
            flexGrow: 1
          }}>
            <Details person={person} />
          </Box>
          <Box sx={{
            flexGrow: 1
          }}>
            <Features person={person} />
          </Box>
          <Box sx={{
            flexGrow: 1
          }}>
            <Friends person={person} />
          </Box>
        </Box>
      </Box>;
  }

  return content;
};

export default PersonProfile;