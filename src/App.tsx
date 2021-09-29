import { Route, Switch, Redirect } from 'react-router-dom';
import Container from '@mui/material/Container';
import './App.css';
import PeoplePage from './pages/People';
import PersonProfilePage from './pages/PersonProfile';

function App() {
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