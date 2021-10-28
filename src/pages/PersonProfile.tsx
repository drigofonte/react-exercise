import { NavLink, useParams } from 'react-router-dom';

import Details from '../components/profile/Details';
import Features from '../components/profile/Features';
import Friends from '../components/profile/Friends';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import { useFetchUsersQuery } from '../features/users/users-api-slice';
import { useAppSelector } from '../app/hooks';

type PersonProfileParams = {
  id: string
};

const PersonProfile = () => {
  const params = useParams<PersonProfileParams>();
  // const { data: indexedUsers = { users: [], namesToIds: {} } } = useFetchUsersQuery();
  // const { users, namesToIds } = indexedUsers;
  const users = useAppSelector((state) => state.users.users);
  const namesToIds = useAppSelector((state) => state.users.namesToIds);

  const numId = Number(params.id);
  const person = users.find((u) => u.id === numId);

  let content = <div></div>;
  if (person) {
    content = 
      <>
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
            <Friends person={person} users={users} namesToIds={namesToIds} />
          </Box>
        </Box>
      </>;
  }

  return content;
};

export default PersonProfile;