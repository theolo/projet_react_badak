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
        if (this.state.id_page !== this.props.data.page.id){
            this.setState({
                id_page: this.props.data.page.id,
                titre: this.props.data.page.titre,
                h1: this.props.data.page.h1,
                url: this.props.data.page.url
            })
        }
    }

    componentDidUpdate() {
        if (this.state.id_page !== this.props.data.page.id){
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
        } else
            console.log("page undefined");
    }

    render() { 
        console.log(this.props.data.page.titre);
        return (
            <div style={styles.width8}>
                <div style={styles.flex100}>
                    <p>title :</p>
                    <input style={{...styles.width8, ...styles.input}} name="titre" type='text' value={this.state.titre} onChange={this.handleChange}/>
                </div>

                <div style={styles.flex100}>
                    <p>h1 :</p>
                    <input style={{...styles.width8, ...styles.input}} name="h1" type='text' value={this.state.h1} onChange={this.handleChange}/>
                </div>

                <div style={styles.flex100}>
                    <p>URL :</p>
                    <input style={{...styles.width8, ...styles.input}} name="url" type='text' value={this.state.url} onChange={this.handleChange}/>
                </div>
                <div style={styles.right}>
                    <button style={styles.button} onClick={this.SaveTop}>Enregistrer top page</button>
                </div>
            </div>
        );
    }
}

export default TopPageContent;

const styles = {
    width8: {
        width: '90%',
        margin: '0 1%',
    },
    flex100: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
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