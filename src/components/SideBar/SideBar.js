import React from 'react';
import { DataContext } from '../../store/DataProvider';

import { getPages } from '../../api/functions';
import ButtonList from '../ButtonList';
import LogoutButton from '../LogoutButton/LogoutButton';
import './style.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project_name: '',
            pages: [],
            info: [
                {
                    nom: "info 1",
                },
                {
                    nom: "info 2",
                },{
                    nom: "plus",
                },
            ],
        }
    }

    componentDidMount() {
        const projet = JSON.parse(localStorage.projet);
        this.setState({project_name: projet.nom})
        getPages(projet.id, (resp)=> {
            this.setState({pages: resp.pages});
        })
    }

    // setPage = (e) => {
    // }

    handleClick = (param) => {
        this.props.data.setPage(param);
        localStorage.setItem('page', JSON.stringify(param));
        this.props.history.push(`/projets/pages/${param.id}`);
    }

    render() {
        const { pages, info } = this.state
        return (
            <div style={styles.sidebar}>
                <h3>{this.state.project_name}</h3>
                <hr/>
                <ButtonList styles={styles} toList={info} />
                <hr />
                <p>Pages :</p>
                <ButtonList styles={styles} toList={pages} onClick={this.handleClick} />
                {/* {this.state.pages.map((page, index) =>
                    <button key={index} id={page.id} onClick={this.handleClick(page)}>{page.nom}</button>
                )} */}
                <LogoutButton history={this.props.history}/>
            </div>
        )
    }
}
SideBar.contextType = DataContext


export default SideBar;

const styles = {
    sidebar: {
        margin: 0,
        padding: 0,
        width: '20%',
        backgroundColor: '#f1f1f1',
        position: 'fixed',
        height: '100%',
        overflow: 'auto',
    },
    button: `
        border: none;
        text-align: left;
        font-size: 1rem;
        color: black;
        padding: 16px;
        width: 100%;
        cursor: pointer;
        &:hover {
            background-color: #555;
            color: white;
        }
    `
}