import React from 'react';
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
        return (
            <div className="container">
                <div className="forms">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Se connecter</h2>
                        <label>Email
                        <input 
                            type="email" 
                            placeholder="exemple@gmail.com" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange} 
                            required/>
                        </label>
                        <label>Password
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required/>
                        </label>
                        <button type="submit" className='btn-violet'>Connexion</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;

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

