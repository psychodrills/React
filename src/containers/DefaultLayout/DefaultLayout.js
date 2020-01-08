import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// routes config
import routes from '../../routes';
import MainSidebar from "../../lib/api/SideBars/MainSidebar";
import User from "../../views/Users/User";
import UserAuthentication from "../../lib/api/Authentication/Auth";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props);
    this.auth = new UserAuthentication()
    this.mainmenu = new MainSidebar()
    this.state = {
      nav_list: {
        items: []
      }
    }
  }


  componentDidMount(){
    this.fetch_side_bar_nav_links()
  }

  fetch_side_bar_nav_links(){
    this.mainmenu.fetch_action_tags_with_submenus().then(data => {
      console.log(data.data)
      if (data.data.request_status){
        this.setState({
          nav_list: data.data.action_tags
        })
      }
    })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    this.auth.signout()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense fallback={this.loading()}>
              <div className="w-100">
                <input class="form-control mr-sm-2 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
              </div>
            <AppSidebarNav navConfig={this.state.nav_list} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="mt-2 main">
            {/*<AppBreadcrumb appRoutes={routes} router={router}/>*/}
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
