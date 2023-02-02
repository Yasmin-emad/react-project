// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import MoviList from './pages/Movie-List/Movie-list'
import NotFound from './shared/NotFound/NotFound'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './shared/Navbar/Navbar'
import SingleMovie from './pages/Single-Movie/Single-Movie';
import { Provider } from 'react-redux/es';
import store from './Store/Store';
import Favorites from './component/Favorites/Favorites';
import { Login } from './pages/Login/Login';
import Signup from './pages/Signup/Signup';



function App() {
  return (
    <Provider store={store}>
    <div className="App" id="shell">
      {/* <p>hello</p> */}

      <BrowserRouter> 
        <Navbar />
        <Switch> 
          <Route exact  path={"/"} component={Home} />
          <Route exact path={"/Movies"} component={MoviList} /> 
          <Route exact path={"/single/:id"} component={SingleMovie} />
          <Route exact path={"/favorites"} component={Favorites} />
          <Route exact path={"/Login"} component={Login} />
          <Route exact path={"/Signup"} component={Signup} />
          {/* <Route exact path={"/add"} component={AddUser} />
          <Route exact path={"/class"} component={ClassComponent} />
          <Route exact path={"/company"} component={Company} />
          <Route exact path={"/view/:id"} component={ViewCompany} /> */}

          <Route exact path={"*"} component={NotFound} />

        </Switch> 
      </BrowserRouter>
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </Provider>
  );
}

export default App;
