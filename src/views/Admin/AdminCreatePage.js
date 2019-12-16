import React, { Component } from 'react';
import { createPage } from '../../api/functions';

class AdminCreatePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payload: {
                nom: '',
                description: '',
                titre: '',
                h1: '',
                url: '',
                id_projet: '',
                id_modele: '1'
            },
            succes: false,
            value: '',
        }
    }

    componentDidMount() {
        this.setState({
            payload: {
                ...this.state.payload,
                id_projet: JSON.parse(localStorage.projetForAdmin).id,
            }
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        let toSet = {[name]: value};
        this.setState({
            payload: {
                ...this.state.payload,
                ...toSet,
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        createPage(this.state.payload, (resp) => {
            if(resp.message === 'Page créée.') {
                this.setState({
                    payload: {
                        ...this.state.payload,
                        nom: '',
                        description: '',
                        titre: '',
                        h1: '',
                        url: '',
                        id_modele: ''
                    },
                    succes: true,
                })
            }
        })
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.forms}>
                    <form style={styles.form} onSubmit={this.handleSubmit}>
                        <h2>Créer une page</h2>
                        <label>Nom
                            <input
                                style={styles.inputs}
                                type="text" 
                                placeholder="e.g. Page 1" 
                                name="nom" 
                                value={this.state.payload.nom} 
                                onChange={this.handleChange}
                                required
                                />
                        </label>
                        <label>Description
                            <textarea
                                style={styles.inputs}
                                placeholder="e.g. la page de fou" 
                                name="description"
                                value={this.state.payload.description} 
                                onChange={this.handleChange} 
                                rows="5"
                                />
                        </label>
                        <label>titre
                            <input
                                style={styles.inputs}
                                type="text"
                                placeholder="le 'title' de la page" 
                                name="titre" 
                                value={this.state.payload.titre} 
                                onChange={this.handleChange}
                                />
                        </label>
                        <label>h1
                            <input
                                style={styles.inputs}
                                type="text" 
                                placeholder="le <h1> de la page" 
                                name="h1" 
                                value={this.state.payload.h1} 
                                onChange={this.handleChange}
                                />
                        </label>
                        <label>url
                            <input
                                style={styles.inputs}
                                type="text" 
                                placeholder="l'url de la page" 
                                name="url" 
                                value={this.state.payload.url} 
                                onChange={this.handleChange}
                                />
                        </label>
                        <label>Modele
                            <select onChange={this.handleChange} name='id_modele' value={this.state.payload.id_modele}>
                                <option value='1'>modele 1</option>
                                <option value='2'>modele 2</option>
                                <option value='3'>modele 3</option>
                                <option value='4'>modele 4</option>
                                <option value='5'>modele 5</option>
                                <option value='6'>modele 6</option>
                            </select>
                        </label>
                        {this.state.succes && <p style={{color: 'green', margin: 0, fontSize: 10}}>Page créée</p>}
                        <div style={styles.right}>
                            <button style={styles.button} type="submit">Créer la page</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5% 0',
        margin: 'auto',
    },
    forms: {
        width: '40%',
    },
    form: {
        border: '3px solid #f1f1f1',
        padding: '5%',
    },
    inputs: {
        width: '100%',
        padding: '5px 5px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
    },
    button: {
        border: 'none',
        margin: '0 20px 0 0',
        padding: '.5em 1em',
        color: 'white',
        borderRadius: '4px',
        textShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        background: 'rgb(28, 184, 65)',
    },
    right: {
        textAlign: 'right',
    },
}

export default AdminCreatePage;