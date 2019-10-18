import React from 'react';
import CustomField from './CustomField';


class EditBloc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            section: false,
            custom: false,
            cancel: false
        }
    }

    handleClick = (e) => {
        const name = e.target.name
        this.setState({[name]: !this.state.name})
    }

    render() {
        const { section, custom } = this.props.bloc
        if(!section && !custom) {
            return (
                <>
                    <div style={styles.bloc}>
                        <button id={this.props.bloc.id} name='section' onClick={this.props.handleClick}>Section</button>
                        <button id={this.props.bloc.id} name='custom' onClick={this.props.handleClick}>Custom</button>
                        <button id={this.props.bloc.id} onClick={this.props.deleteBlock}>Supprimer ce bloc</button>
                    </div>
                </>
            )
        }else if(!section && custom) {
            return (
                <>
                    <div style={styles.bloc}>
                        <CustomField />
                        <button id={this.props.bloc.id} onClick={this.props.deleteBlock}>Supprimer ce bloc</button>
                    </div>
                </>
            )
        }
        return (
            <div style={styles.bloc}>
                <button id={this.props.bloc.id} onClick={this.props.deleteBlock}>Supprimer ce bloc</button>
            </div>
        )
    }
}

export default EditBloc;

const styles = {
    bloc: {
        border: '2px solid #ccc',
        borderRadius: '4px',
        padding: '3%',
        margin: '0 1% 1% 1%',
    }
}