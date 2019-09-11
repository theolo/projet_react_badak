import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

class Admin extends React.Component {
    render() {
        const LinkHover = styled(Link)`
            ${styles.button}
        `
        return (
            <div style={styles.container}>
                <LinkHover to="admin/ajout-client">Ajouter un client</LinkHover>
                <LinkHover to="admin/clients" className="btn-violet">Liste Clients</LinkHover>
                <LogoutButton history={this.props.history} />
            </div>
        )
    }
}

export default Admin;

const styles = {
    container: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5% 0',
        margin: 'auto',
    },
    button: `
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        margin: 10px 0;
        padding: 5% 0;
        width: 100%;
        background-color: #3a0172;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
            background-color: #6004bd;
        }
    `,
}