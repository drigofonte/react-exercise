import { Route, Switch, Redirect } from 'react-router-dom';
import Container from '@mui/material/Container';
import './App.css';
import PeoplePage from './pages/People';
import PersonProfilePage from './pages/PersonProfile';
import { useStore } from './store/store';
import Person from './models/person';
import { useEffect } from 'react';

function App() {
  const [ state, dispatch ] = useStore(false);
  const { people }: { people?: Person[] } = state;

  useEffect(() => {
    if (people?.length === 0) {
      dispatch('LOAD_PEOPLE', null);
    }
  }, [dispatch, people]);

  return (
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
  );
}

export default App;