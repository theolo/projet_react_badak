import React from 'react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import ButtonList from '../../components/ButtonList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPages } from '../../api/functions';

class AdminPageList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: [],
        }
    }

    componentDidMount(){
        // if(localStorage.getItem('id_user') === null)
        //     this.props.history.push('/');
        // else{
        let id_projet = JSON.parse(localStorage.getItem('projet')).id
        getPages(id_projet, (resp)=> {
            this.setState({pages: resp.pages});
        })
        }
    // }

    handleClick = (page) => {
        localStorage.setItem('page', JSON.stringify(page));
        this.props.history.push(`/admin/clients/projets/pages/${page.id}`)
    }

    render() {
        const LinkHover = styled(Link)`
            ${styles.button}
        `
        const { pages } = this.state
        // if(localStorage.getItem('id_user') === null)
        //     this.props.history.push('/');
        return (
            <div style={styles.container}>
                {/* {this.state.users.map((user, index) =>
                    <button key={index} id={user.id} className='btn-violet' onClick={this.handleClick}>{user.entreprise}</button>
                    )} */}
                <ButtonList style={styles.button} toList={pages} onClick={(page) => this.handleClick(page)} />
                <LinkHover to="pages/create">Créer une page</LinkHover>
                <LinkHover to="pages/modele">Créer un modèle</LinkHover>
                <LogoutButton history={this.props.history} />
            </div>
        );
    }
}

export default AdminPageList;

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