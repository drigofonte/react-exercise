import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import configurePeopleStore from './store/people-store';

configurePeopleStore();

ReactDOM.render(<App />, document.getElementById('root'));