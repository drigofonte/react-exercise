import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

import configurePeopleStore from './store/people-store';

configurePeopleStore();

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));