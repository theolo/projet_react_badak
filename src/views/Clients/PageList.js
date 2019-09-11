import React from 'react';
// import { Link } from 'react-router-dom';
import { DataContext } from '../../store/DataProvider'

import ButtonList from '../../components/ButtonList'
import LogoutButton from '../../components/LogoutButton/LogoutButton'

import { getPages } from '../../api/functions'

class PageList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: [],
        }
    }

    componentDidMount(){
        if(!localStorage.projet){
            this.props.history.push('/projet');
        } else {
            let projet = JSON.parse(localStorage.projet);
            getPages(projet.id, (resp)=> {
                this.setState({pages: resp.pages});
            })
        }
    }

    handleClick = (param) => {
        localStorage.setItem('page', JSON.stringify(param));
        this.context.setPage(param);
        this.props.history.push(`/projets/pages/${param.id}`)
    }

    render() {
        const {pages} = this.state;
        return (
            <div style={styles.container}>
                <ButtonList styles={styles} toList={pages} onClick={(page) => this.handleClick(page)} />
                {/* {pages.map((page, index) =>
                    <button key={index} id={page.id} className='btn-violet' onClick={this.handleClick(page)}>{page.nom}</button>
                    )} */}
                <LogoutButton history={this.props.history} />
            </div>
        );
    }
}
PageList.contextType = DataContext;

export default PageList;

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