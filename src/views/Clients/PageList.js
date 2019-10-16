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
        // if(!this.context.project.id){
        //     this.props.history.push('/projet');
        } else {
            getPages(JSON.parse(localStorage.projet).id, (resp) => {
                this.setState({pages: resp.pages});
            })
            // getPages(this.context.project.id, (resp)=> {
            //     this.setState({pages: resp.pages});
            // })
        }
    }

    handleClick = (page) => {
        localStorage.setItem('page', JSON.stringify(page));
        this.context.setPage(page);
        this.props.history.push(`/projets/pages/${page.id}`)
    }

    render() {
        const {pages} = this.state;
        return (
            <div style={styles.container}>
                <ButtonList style={styles.button} toList={pages} onClick={(page) => this.handleClick(page)} />
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
    font-size: 16px;
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