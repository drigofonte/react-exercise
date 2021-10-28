import { Route, Switch, Redirect } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useAppDispatch } from './app/hooks';
import { fetchUsers } from './features/users/users-actions';
import './App.css';
import PeoplePage from './pages/People';
import PersonProfilePage from './pages/PersonProfile';
import { useEffect } from 'react';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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