import React from 'react';

class LogoutButton extends React.Component {
    
    handleLogout = (e) => {
        localStorage.clear();
        this.props.history.push("/");
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="d-flex-100">
                <button className="btn-violet dc"onClick={this.handleBack}>Retour</button>
                <button className='btn-violet dc' onClick={this.handleLogout}>Déconnexion</button>
            </div>
        )
    }
}

export default LogoutButton;