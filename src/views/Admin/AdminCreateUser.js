import React from 'react'

import { addUser } from '../../api/functions'

class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prenom: '',
            nom: '',
            entreprise: '',
            email: '',
            password: '',
            isAdmin: false
        }
    }

    handleChange = (event) => {
        const {name, value, checked} = event.target
        let toSet = {[name]: value}
        if(event.target.type === "checkbox"){
            toSet = {[name]: checked}
        }
        this.setState(
            toSet
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = this.state
        addUser(payload);
        this.setState({
            prenom: '',
            nom: '',
            entreprise: '',
            email: '',
            password: '',
            isAdmin: false
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className='forms'>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Ajouter un utilisateur</h2>
                        <label>Prenom
                            <input
                                type="text" 
                                placeholder="John" 
                                name="prenom" 
                                value={this.state.prenom} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Nom
                            <input
                                type="text" 
                                placeholder="Doe" 
                                name="nom" 
                                value={this.state.nom} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Entreprise
                            <input
                                type="text" 
                                placeholder="JohnDoe Corp" 
                                name="entreprise" 
                                value={this.state.entreprise} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Email
                            <input
                                type="email" 
                                placeholder="exemple@gmail.com" 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                        <label>Password
                            <input
                                type="text" 
                                name="password"
                                value={this.state.password} 
                                onChange={this.handleChange} 
                                required
                                />
                        </label>
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    id="isAdmin"
                                    name="isAdmin"
                                    checked={this.state.isAdmin}
                                    onChange={this.handleChange}
                                    />
                                    <label for="isAdmin">isAdmin</label>
                            </div>
                        <button type="submit" className='btn-violet'>Ajouter l'utilisateur</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateUser;