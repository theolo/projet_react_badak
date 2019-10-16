import React, { Component } from 'react';
import { createProject } from '../../api/functions';

class AdminCreateProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payload: {
                nom: '',
                description: '',
                id_user: null
            },
            succes: false,
        }
    }

    componentDidMount() {
        this.setState({
            payload: {
                ...this.state.payload,
                id_user: JSON.parse(localStorage.userForAdmin).id,
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
        console.log("test")
        createProject(this.state.payload, (resp) => {
            if(resp.message === 'Projet créé.') {
                this.setState({
                    payload: {
                        ...this.state.payload,
                        nom: '',
                        description: '',
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
                        <h2>Creer un projet</h2>
                        <label>Nom
                            <input
                                style={styles.inputs}
                                type="text" 
                                placeholder="e.g. John" 
                                name="nom" 
                                value={this.state.payload.nom} 
                                onChange={this.handleChange}
                                required
                                />
                        </label>
                        <label>Description
                            <textarea
                                style={styles.inputs}
                                placeholder="Une projet de fou" 
                                name="description"
                                value={this.state.payload.description} 
                                onChange={this.handleChange} 
                                />
                        </label>
                        {this.state.succes && <p style={{color: 'green', margin: 0, fontSize: 10}}>Utilisateur créé</p>}
                        <div style={styles.right}>
                            <button style={styles.button} type="submit">Créer le projet</button>
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

export default AdminCreateProject;