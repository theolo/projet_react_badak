import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

class Admin extends React.Component {
    render() {
        return (
            <div className="container w-20">
                <Link to="admin/ajout-client" className="btn-violet">Ajouter un client</Link>
                <Link to="admin/clients" className="btn-violet">Liste Clients</Link>
                <LogoutButton history={this.props.history} />
            </div>
        )
    }
}

export default Admin;