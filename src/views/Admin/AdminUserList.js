import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { getUsers } from '../../api/functions'
import ButtonList from '../../components/ButtonList';

class AdminUserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    

    componentDidMount(){
        // if(localStorage.getItem('id_user') === null)
        //     this.props.history.push('/');
        // else{
            getUsers((resp)=> {
                this.setState({users: resp.users});
            })
        }
    // }

    handleClick = (param) => {
        localStorage.setItem('userForAdmin', JSON.stringify(param));
        this.props.history.push(`/admin/clients/projets`);
    }

    render() {
        const LinkHover = styled(Link)`
            ${styles.button}
        `
        const { users } = this.state
        // if(localStorage.getItem('id_user') === null)
        //     this.props.history.push('/');
        return (
            <div style={styles.container}>
                {/* {this.state.users.map((user, index) =>
                    <button key={index} id={user.id} className='btn-violet' onClick={this.handleClick}>{user.entreprise}</button>
                    )} */}
                <ButtonList style={styles.button} toList={users} onClick={(user) => this.handleClick(user)} />
                <LinkHover to="admin/ajout-client">Ajouter un client</LinkHover>
                <LogoutButton history={this.props.history} />
            </div>
        );
    }
}

export default AdminUserList;

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