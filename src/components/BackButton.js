import React, { Component } from 'react';

class BackButton extends Component {
    handleClick = () => {
        this.props.history.push('/projets');
    }

    render() { 
        return (
            <div style={styles.flex100}>
                <button style={styles.button} onClick={this.handleClick}>Retour au projets</button>
            </div>
        );
    }
}

export default BackButton;

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
        backgroundColor: '#3a0172',
        color: 'white',
        padding: '3% 0',
        marginTop: '5%',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
    }
}