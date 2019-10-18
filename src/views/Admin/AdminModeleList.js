import React from 'react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import ButtonList from '../../components/ButtonList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getModeles } from '../../api/functions';

class AdminProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modeles: [],
        }
    }

    componentDidMount(){
        let admin = JSON.parse(localStorage.user).admin;
        getModeles(admin, (resp)=> {
            this.setState({modeles: resp.modeles});
        });
    }

    handleClick = (param) => {
        localStorage.setItem('projet', JSON.stringify(param));
        this.props.history.push(`/admin/modele/${param.id}`);
    }

    render() {
        const LinkHover = styled(Link)`
            ${styles.button}
        `
        const { modeles } = this.state
        return (
            <div style={styles.container}>
                {/* {this.state.users.map((user, index) =>
                    <button key={index} id={user.id} className='btn-violet' onClick={this.handleClick}>{user.entreprise}</button>
                    )} */}
                <ButtonList style={styles.button} toList={modeles} onClick={(modele) => this.handleClick(modele)} />
                <LinkHover to="modele/create">Créer un modele</LinkHover>
                <LogoutButton history={this.props.history} />
            </div>
        );
    }
}

export default AdminProjectList;

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