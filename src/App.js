import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GithubState from './context/github/GihubState';
import AlertState from './context/alert/AlertState';

import Alert from './components/layout/Alert';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';
import Layout from './components/layout/Layout';
import About from './components/pages/About';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Layout>
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return (
                    <>
                      <Search />
                      <Users />
                    </>
                  );
                }}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
