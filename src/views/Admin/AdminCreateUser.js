import React from 'react'

import { addUser } from '../../api/functions'

class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            payload: {
                prenom: '',
                nom: '',
                entreprise: '',
                email: '',
                password: '',
                isAdmin: false
            },
            password2: '',
            error: false,
            succes: false,
        }
    }

    handleChange = (event) => {
        const {name, value, checked} = event.target
        let toSet = {[name]: value};
        if(name === 'password2') {
            this.setState(
                toSet
            )
        }
        else {
            this.setState({
                payload: {
                    ...this.state.payload,
                    ...toSet
                }
            })
        }
        if(event.target.type === "checkbox"){
            toSet = {[name]: checked}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.payload.password === this.state.password2) {
            addUser(this.state.payload, (resp) => {
                if(resp.message === 'User was created.'){
                    this.setState({
                        payload: {
                            prenom: '',
                            nom: '',
                            entreprise: '',
                            email: '',
                            password: '',
                            isAdmin: false
                        },
                        password2: '',
                        error: false,
                        succes: true,
                    })
                }
            })
            } else {
                this.setState({
                    error: true,
                });
            }
    }

    render() {
        console.log(this.state);
        return (
            <div style={styles.container}>
                <div style={styles.forms}>
                    <form style={styles.form} onSubmit={this.handleSubmit}>
                        <h2>Ajouter un utilisateur</h2>
                        <label>Prenom
                            <input
                                style={styles.inputs}
                                type="text" 
                                placeholder="e.g. John" 
                                name="prenom" 
                                value={this.state.payload.prenom} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Nom
                            <input
                                style={styles.inputs}
                                type="text" 
                                placeholder="e.g. Doe" 
                                name="nom" 
                                value={this.state.payload.nom} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Entreprise
                            <input
                                style={styles.inputs}
                                type="text" 
                                placeholder="e.g. JohnDoe Corp" 
                                name="entreprise" 
                                value={this.state.payload.entreprise} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Email
                            <input
                                style={styles.inputs}
                                type="email" 
                                placeholder="e.g. exemple@gmail.com" 
                                name="email" 
                                value={this.state.payload.email} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Password
                            <input
                                style={styles.inputs}
                                type="password" 
                                name="password"
                                value={this.state.payload.password} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Verification
                            <input
                                style={styles.inputs}
                                type="password" 
                                name="password2"
                                value={this.state.password2} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        {this.state.error && <p style={{color: 'red', margin: 0, fontSize: 10}}>Les mots de passe ne correspondent pas</p>}
                        <div className="checkbox">
                            <input
                                type="checkbox"
                                id="isAdmin"
                                name="isAdmin"
                                checked={this.state.isAdmin}
                                onChange={this.handleChange}
                                />
                                <label htmlFor="isAdmin">isAdmin</label>
                        </div>
                        {this.state.succes && <p style={{color: 'green', margin: 0, fontSize: 10}}>Utilisateur créé</p>}
                        <div style={styles.right}>
                            <button style={styles.button} type="submit">Ajouter l'utilisateur</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateUser;

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