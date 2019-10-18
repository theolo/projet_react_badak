import React, { Component } from 'react';

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
        // let page = JSON.parse(localStorage.getItem('page'));
        if (this.state.id_page !== this.props.data.page.id){
        // if (this.state.id_page !== page.id){
            this.setState({
                id_page: this.props.data.page.id,
                titre: this.props.data.page.titre,
                h1: this.props.data.page.h1,
                url: this.props.data.page.url
            })
        }
    }

    componentDidUpdate() {

        // let page = JSON.parse(localStorage.getItem('page'));
        if (this.state.id_page !== this.props.data.page.id){
        // if (this.state.id_page !== page.id){
            this.setState({
                id_page: this.props.data.page.id,
                titre: this.props.data.page.titre,
                h1: this.props.data.page.h1,
                url: this.props.data.page.url
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    SaveTop = () => {
        if (this.state.id_page !== null) {
            updateTopPage(this.state, (resp) => {
                console.log(resp);
            })
            this.props.data.setPage({
                ...this.props.data.page,
                titre: this.state.titre,
                h1: this.state.h1,
                url: this.state.url,
            })
            let page = JSON.parse(localStorage.getItem('page'));
            console.log(page);
            localStorage.setItem('page', JSON.stringify({...this.state, ...page}))
        } else
            console.log("page undefined");
    }

    render() {
        console.log(localStorage.page);
        return (
            <div style={styles.container}>
                <div style={styles.spacing}>
                    <div style={styles.flex}>
                        <label style={styles.label}>title :</label>
                        <input style={styles.input} name="titre" type='text' value={this.state.titre} onChange={this.handleChange}/>
                    </div>

                    <div style={styles.flex}>
                        <label style={styles.label}>h1 :</label>
                        <input style={styles.input} name="h1" type='text' value={this.state.h1} onChange={this.handleChange}/>
                    </div>

                    <div style={styles.flex}>
                        <label style={styles.label}>URL :</label>
                        <input style={styles.input} name="url" type='text' value={this.state.url} onChange={this.handleChange}/>
                    </div>
                    <div style={styles.right}>
                        <button style={styles.button} onClick={this.SaveTop}>Enregistrer top page</button>
                    </div>
                </div>
                <hr style={{margin: 0}}/>
            </div>
        );
    }
}

export default TopPageContent;

const styles = {
    container: {
        width: '80%',
        backgroundColor: '#fff',
        position: 'fixed',
        paddingBottom: 0,
        marginBottom: 0,
    },
    spacing: {
        padding: '10px 10px 0px 10px',
    },
    flex: {
        display: 'flex',
        margin: 10,
    },
    label: {
        width: 50,
    },
    input: {
        width: '100%',
        padding: '5px 5px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
    },
    right: {
        textAlign: 'right',
    },
    button: {
        border: 'none',
        padding: '.5em 1em',
        margin: '.5em',
        color: 'white',
        borderRadius: '4px',
        textShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        background: 'rgb(28, 184, 65)',
    }
}