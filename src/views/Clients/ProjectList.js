import React from 'react';
// import { DataContext } from "../../store/DataProvider";

import LogoutButton from '../../components/LogoutButton/LogoutButton';
import ButtonList from '../../components/ButtonList';

import { getProjects } from '../../api/functions';

class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projets: [],
        }
    }

    componentDidMount(){
        if(!localStorage.user)
            this.props.history.push('/');
        else {
            let user = JSON.parse(localStorage.user);
            getProjects(user.id, (resp) => {
                this.setState({projets: resp.projets});
            })
        }
    }

    handleClick = (param) => {
        localStorage.setItem('projet', JSON.stringify(param));
        this.props.history.push('/projets/pages');
    }

    render() {
        const { projets } = this.state 
        return (
            <div style={styles.container}>
                {/* {this.state.projets.map((projet, index) =>
                    <button key={index} id={projet.id} className='btn-violet' onClick={this.handleClick(projet)}>{projet.nom}</button>
                    )} */}
                    <ButtonList styles={styles} toList={projets} onClick={(projet) => this.handleClick(projet)} />
                    <LogoutButton history={this.props.history} />
            </div>
        );
    }
}
// ProjectList.contextType = DataContext;

export default ProjectList;

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
    font-size: 14px;
    margin: 10px 0;
    width: 100%;
    padding: 5%;
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