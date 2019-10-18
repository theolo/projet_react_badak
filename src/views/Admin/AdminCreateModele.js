import React, { Component } from 'react';
import { createModele} from '../../api/functions';

class AdminCreateModele extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payload: {
                nom: '',
            },
            succes: false,
        }
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
        console.log(this.state.payload)
        createModele(this.state.payload, (resp) => {
            if(resp.message === 'Modèle créé.') {
                this.setState({
                    payload: {
                        ...this.state.payload,
                        nom: '',
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
                        <h2>Créer un Modèle</h2>
                        <label>Nom
                            <input
                                style={styles.inputs}
                                type="text" 
                                placeholder="e.g. le modèle blablah" 
                                name="nom" 
                                value={this.state.payload.nom} 
                                onChange={this.handleChange}
                                required
                                />
                        </label>
                        {this.state.succes && <p style={{color: 'green', margin: 0, fontSize: 10}}>Modèle créé</p>}
                        <div style={styles.right}>
                            <button style={styles.button} type="submit">Créer le modèle</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AdminCreateModele;

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
        maxWidth: '100%',
        padding: '5px 5px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
    },
    textarea: {
        resize: 'vertical'
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
        paddingTop: '20px',
        textAlign: 'right',
    },
}
