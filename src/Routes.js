import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import LoginPage from './views/LoginPage/LoginPage';
import ProjectList from './views/Clients/ProjectList';
import PageList from './views/Clients/PageList'
import EditPage from './views/Clients/EditPage';
// import ProjectModif from './views/Admin/AdminProjectModif';
// import Bloc from './components/Test/Bloc';
// import EditContent from './components/Test/EditContent';
import Admin from './views/Admin/Admin'
import AdminModeleList from './views/Admin/AdminModeleList';
import AdminCreateModele from './views/Admin/AdminCreateModele';
import AdminUserList from './views/Admin/AdminUserList';
import AdminCreateUser from './views/Admin/AdminCreateUser';
import AdminProjectList from './views/Admin/AdminProjectList';
import AdminCreateProject from './views/Admin/AdminCreateProject';
import AdminPageList from './views/Admin/AdminPageList';
import AdminCreatePage from './views/Admin/AdminCreatePage';
import AdminProjectModif from './views/Admin/AdminProjectModif';
import CantAccess from './views/CantAccess';
import NotFound from './views/NotFound';

import ZoneContent from './components/Test/ZoneContent';
// import EditBloc from './components/Test/EditBloc';

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
                component={ZoneContent}
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
                component={AdminModeleList}
                exact
                path="/admin/modele"
                />
                <Route
                component={AdminCreateModele}
                exact
                path="/admin/modele/create"
                />
                <Route
                component={ZoneContent}
                exact
                path="/admin/modele/:modele_id"
                />
                <Route
                component={AdminUserList}
                exact
                path="/admin/clients"
                />
                <Route
                component={AdminCreateUser}
                exact
                path="/admin/clients/ajout-client"
                />
                <Route
                component={AdminProjectList}
                exact
                path="/admin/clients/projets"
                />
                <Route
                component={AdminCreateProject}
                exact
                path="/admin/clients/projets/create"
                />
                <Route
                component={AdminPageList}
                exact
                path="/admin/clients/projets/pages"
                />
                <Route
                component={AdminCreatePage}
                exact
                path="/admin/clients/projets/pages/create"
                />
                <Route
                component={AdminProjectModif}
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
                exact
                path='/rd'
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
