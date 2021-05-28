
import './App.css';
import {Admin ,Resource,fetchUtils} from 'react-admin';
import RestProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
//import authProvider from './doc/authProvider';
import SignInSide from './SignInSide';
import Hook from './layout';

/*const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};*/


function App() {
  return (
    <Admin dataProvider={RestProvider('http://localhost:3000')} signIn={SignInSide} /*authProvider={authProvider}*/>
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
      <Hook></Hook>
    </Admin>
   /* <div className="App">
      <header className="App-header">
        hello
      </header>
    </div>*/
  );
}

export default App;
