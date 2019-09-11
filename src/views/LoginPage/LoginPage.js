import React from 'react';
import styled from 'styled-components';
// import { DataContext } from '../../store/DataProvider'

import { logIn } from '../../api/functions'

class LoginPage extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = {email: this.state.email, password: this.state.password}
        logIn(payload, (resp) => {
            localStorage.setItem("user", JSON.stringify(resp.user));
            if(resp.user.admin === '1')
                this.props.history.push("/admin");
            else if (resp.user.admin === '0')
                this.props.history.push("/projets");
        });
        this.setState({password: ''})
    }

    render() {
        const ButtonHover = styled.button`
            ${styles.button}
        `
        return (
            <div style={styles.container}>
                <div style={styles.forms}>
                    <form style={styles.form} onSubmit={this.handleSubmit}>
                        <h2>Se connecter</h2>
                        <label>Email
                        <input 
                            style={styles.input}
                            type="email" 
                            placeholder="exemple@gmail.com" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            required/>
                        </label>
                        <label>Password
                        <input 
                            style={styles.input}
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required/>
                        </label>
                        <ButtonHover type="submit">Connexion</ButtonHover>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;

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
        borderRadius: '4px',
        padding: '5%',
    },
    input: {
        width: '100%',
        padding: '2% 1%',
        margin: '3% 0',
        display: 'inline-block',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
    },
    button: `
        width: 100%;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        background-color: #3a0172;
        color: white;
        padding: 3% 0;
        margin: 0;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        &:hover {
            background-color: #6004bd;
        }
    `
}


// function LoginPage(props) {
//     const[userEmail, setUseremail] = useState('');
//     const[userPassword, setUserpassword] = useState('');

//     const handleEmailChange = (e) => {
//         setUseremail(e.target.value);
//     }

//     const handlePasswordChange = (e) => {
//         setUserpassword(e.target.value);
//     } 

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const payload = {'email': userEmail, 'password': userPassword}
//         logIn(payload, (resp) => {
//             localStorage.setItem("id_user", resp.user.id)
//             if(resp.user.admin === '1')
//                 history.push(`/admin`);
//             else
//                 history.push(`/projets`);
//         });
//         setUserpassword('');
//     }

//     return (
//         <div className="container">
//             <div className="forms">
//                 <form onSubmit={handleSubmit}>
//                     <h2>Se connecter</h2>
//                     <label>Email
//                     <input 
//                         type="email" 
//                         placeholder="exemple@gmail.com" 
//                         name="email" 
//                         value={userEmail} 
//                         onChange={handleEmailChange} 
//                         required/>
//                     </label>
//                     <label>Password
//                     <input 
//                         type="password" 
//                         placeholder="Password" 
//                         name="password" 
//                         value={userPassword} 
//                         onChange={handlePasswordChange} 
//                         required/>
//                     </label>
//                     <button type="submit" className='btn-violet'>Connexion</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

