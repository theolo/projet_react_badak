import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import NotFound from './views/NotFound';
import LoginPage from './views/LoginPage/LoginPage';
import Admin from './views/Admin/Admin'
import CreateUser from './views/Admin/AdminCreateUser'
import ListUser from './views/Admin/AdminUserList'
import ProjectList from './views/Clients/ProjectList';
// import ProjectModif from './views/Admin/AdminProjectModif';
import PageList from './views/Clients/PageList'
import EditPage from './views/Clients/EditPage';
// import ZoneContent from './components/Test/ZoneContent';
import CantAccess from './views/CantAccess';
// import Bloc from './components/Test/Bloc';
// import EditContent from './components/Test/EditContent';
import EditBloc from './components/Test/EditBloc';
import AdminProjectList from './views/Admin/AdminProjectList'
import AdminPageList from './views/Admin/AdminPageList'
import ProjectModif from './views/Admin/AdminProjectModif';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Redirect
                exact
                from="/"
                to="/login"
                />
                <Route 
                component={EditBloc}
                exact
                path="/test"
                />
                <Route 
                component={LoginPage}
                exact
                path="/login"
                />
                <Route
                component={Admin}
                exact
                path="/admin"
                />
                <Route
                component={CreateUser}
                exact
                path="/admin/ajout-client"
                />
                <Route
                component={ListUser}
                exact
                path="/admin/clients"
                />
                <Route
                component={AdminProjectList}
                exact
                path="/admin/clients/projets"
                />
                <Route
                component={AdminPageList}
                exact
                path="/admin/clients/projets/pages"
                />
                <Route
                component={ProjectModif}
                exact
                path="/admin/clients/projets/pages/:page_id"
                />
                <Route
                component={ProjectList}
                exact
                path="/projets"
                />
                <Route 
                component={PageList}
                exact
                path="/projets/pages"
                />
                <Route
                component={EditPage}
                exact
                path="/projets/:pages/:page_name"
                />
                <Route
                component={CantAccess}
                exact path='/rd'
                />
                <Route
                component={NotFound}
                exact
                path='/not-found'
                />
                <Redirect to='/not-found' />
            </Switch>
        );
    }
}
