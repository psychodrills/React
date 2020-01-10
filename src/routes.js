import React from 'react';


// import psychodrills route components
const SADashboard = React.lazy(() => import('./views/Dashboard/SADashboard'))
const AddNewSchoolGroup = React.lazy(() => import('./views/SuperAdminSection/AddNewSchoolGroup'));
const SchoolGroupList = React.lazy(() => import('./views/SuperAdminSection/SchoolGroup/SchoolGroupList'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // psychodrills routes
  { path: '/', exact: true, name: 'Login Page' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {path: '/sadashboard', exact: true, name: 'Super Admin Dashboard', component: SADashboard},
  {path: '/add-new-school-group', exact: true, name: 'Add New School Group', component: AddNewSchoolGroup},
  {path: '/school-group-list', exact: true, name: 'School Group List', component: SchoolGroupList}
];

export default routes;
