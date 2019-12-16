import React from 'react';
import CustomField from './CustomField';


class EditBloc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ensemble: false,
            custom: false,
            cancel: false
        }
    }

    handleClick = (e) => {
        const name = e.target.name
        this.setState({[name]: !this.state.name})
    }

    render() {
        const { ensemble, custom } = this.props.bloc
        if(!ensemble && !custom) {
            return (
                <>
                    <div style={styles.bloc}>
                        <button id={this.props.id} bloc_id={this.props.bloc.id} name='ensemble' onClick={this.props.handleClick}>ensemble</button>
                        <button id={this.props.id} bloc_id={this.props.bloc.id} name='custom' onClick={this.props.handleClick}>Custom</button>
                        <button id={this.props.id} onClick={this.props.deleteBlock}>Supprimer ce bloc</button>
                    </div>
                </>
            )
        }else if(!ensemble && custom) {
            return (
                <>
                    <div style={styles.bloc}>
                        <CustomField />
                        <button id={this.props.id} onClick={this.props.deleteBlock}>Supprimer ce bloc</button>
                    </div>
                </>
            )
        }
        return (
            <div style={styles.bloc}>
                <button id={this.props.id} onClick={this.props.deleteBlock}>Supprimer ce bloc</button>
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