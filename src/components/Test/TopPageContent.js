import React, { Component } from 'react';
// import { DataContext } from '../../store/DataProvider';

import { updateTopPage } from '../../api/functions';

class TopPageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_page: null,
            titre: '',
            h1: '',
            url: ''
        }
    }

    componentDidMount() {
        const page = JSON.parse(localStorage.page);
        this.setState({
            id_page: page.id,
            titre: page.titre,
            h1: page.h1,
            url: page.url
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    SaveTop = () => {
        if (this.state.id_page !== null)
            updateTopPage(this.state, (resp) => {
                console.log(resp);
            })
        else
            console.log("page undefined");
    }

    render() { 
        return ( 
            <div className='top_page'>
                <div className='d-flex-100'>
                    <p>title :</p>
                    <input name="titre" type='text' value={this.state.titre} onChange={this.handleChange}/>
                </div>

                <div className='d-flex-100'>
                    <p>h1 :</p>
                    <input name="h1" type='text' value={this.state.h1} onChange={this.handleChange}/>
                </div>

                <div className='d-flex-100'>
                    <p>URL :</p>
                    <input name="url" type='text' value={this.state.url} onChange={this.handleChange}/>
                </div>
                <button onClick={this.SaveTop}>Enregistrer top page</button>
            </div>
        );
    }
}
// TopPageContent.contextType = DataContext;

export default TopPageContent;