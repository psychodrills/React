import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));

// Authentication
const Login = React.lazy(() => import('./views/Authentication/Login'));
const Register = React.lazy(() => import('./views/Authentication/Register'));
const Page404 = React.lazy(() => import('./views/Authentication/Page404'));
const Page500 = React.lazy(() => import('./views/Authentication/Page500'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => localStorage.getItem('accToken') ? <DefaultLayout {...props}/> : <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => localStorage.getItem('accToken') ? <DefaultLayout {...props}/> : <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
