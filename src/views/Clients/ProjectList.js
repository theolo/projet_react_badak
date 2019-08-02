import React from 'react';
// import { DataContext } from "../../store/DataProvider";

import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { getProjects } from '../../api/functions';
import ButtonList from '../../components/ButtonList';

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
            <div className='container w-20'>
                {/* {this.state.projets.map((projet, index) =>
                    <button key={index} id={projet.id} className='btn-violet' onClick={this.handleClick(projet)}>{projet.nom}</button>
                    )} */}
                    <ButtonList toList={projets} onClick={(projet) => this.handleClick(projet)} />
                    <LogoutButton history={this.props.history} />
            </div>
        );
    }
}
// ProjectList.contextType = DataContext;

export default ProjectList;