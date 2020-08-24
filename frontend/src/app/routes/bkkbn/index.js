import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const Dashboard = ({match}) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}home`}/>
      <Route path={`${match.url}/home`} component={asyncComponent(() => import('./routes/home'))}/>
      <Route path={`${match.url}/permohonan`} component={asyncComponent(() => import('./routes/Permohonan'))}/>
      <Route path={`${match.url}/summary`} component={asyncComponent(() => import('./routes/Summary'))}/>
      <Route path={`${match.url}/kampung`} component={asyncComponent(() => import('./routes/Kampung'))}/>
      <Route path={`${match.url}/gdpk`} component={asyncComponent(() => import('./routes/GDPK'))}/>
      <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
    </Switch>
  </div>
);

export default Dashboard;
