import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));

// Pages
const SuperAdminLogin = React.lazy(() => import('./views/Authentication/SuperAdminLogin'));
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/s-a-l" name="Login Page" render={props => localStorage.getItem('accToken') ? <DefaultLayout {...props}/> : <SuperAdminLogin {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => localStorage.getItem('accToken') ? <DefaultLayout {...props}/> : <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => localStorage.getItem('accToken') ? <DefaultLayout {...props}/> : <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => localStorage.getItem('accToken') ? <DefaultLayout {...props}/> : <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => localStorage.getItem('accToken') ? <DefaultLayout {...props}/> : <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
