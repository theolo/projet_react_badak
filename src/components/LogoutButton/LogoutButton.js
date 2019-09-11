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
            <div style={styles.flex100}>
                <button style={styles.button} onClick={this.handleLogout}>Déconnexion</button>
            </div>
        )
    }
}

export default LogoutButton;

const styles = {
    flex100: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '14px',
        backgroundColor: '#f44336',
        color: 'black',
        padding: '3% 0',
        marginTop: '5%',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
    }
}