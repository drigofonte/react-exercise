import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import './App.css';
import PeoplePage from './pages/People';
import PersonProfilePage from './pages/PersonProfile';
import { useStore } from './store/store';
import Person from './models/person';
import { useEffect } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function App() {
  const [ state, dispatch ] = useStore(false);
  const { people }: { people?: Person[] } = state;

  useEffect(() => {
    if (people?.length === 0) {
      dispatch('LOAD_PEOPLE', null);
    }
  }, [dispatch, people]);

  return (
    <Box>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
      >
        <Toolbar variant="dense">
          <NavLink to="/people">
            <HomeIcon fontSize="large" sx={{ color: '#000' }} />
          </NavLink>
        </Toolbar>
      </AppBar>
      <Container 
        maxWidth="md"
      >
        <Switch>
          <Route exact path="/">
            <Redirect to="/people" />
          </Route>
          <Route exact path="/people">
            <PeoplePage />
          </Route>
          <Route path="/people/:id">
            <PersonProfilePage />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}

export default App;