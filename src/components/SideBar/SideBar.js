import React from 'react';
// import { DataContext } from '../../store/DataProvider';

import { getPages } from '../../api/functions';
import ButtonList from '../ButtonList';
import LogoutButton from '../LogoutButton/LogoutButton';
import './style.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project_name: '',
            pages: []
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
        localStorage.setItem('page', JSON.stringify(param));
        this.props.history.push(`/projets/pages/${param.id}`)
    }

    render() {
        const pages = this.state.pages
        // console.log(pages)
        return (
            <div className="sidebar">
                <h3>{this.state.project_name}</h3>
                <hr/>
                <button>Info 1</button>
                <button>Info 2</button>
                <button>Plus</button>
                <hr />
                <p>Pages :</p>
                <ButtonList toList={pages} onClick={this.handleClick} />
                {/* {this.state.pages.map((page, index) =>
                    <button key={index} id={page.id} onClick={this.handleClick(page)}>{page.nom}</button>
                )} */}
                <LogoutButton history={this.props.history}/>
            </div>
        )
    }
}
// SideBar.contextType = DataContext


export default SideBar;