import React, { Component } from 'react';
import { getPageBlocs } from '../../api/functions'
import Bloc from './Bloc';

class EditContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocs: [],
            page_id: null,
        }
    }

    setBlocs = () => {
        if (this.state.page_id !== this.props.data.page.id){
            this.setState({
                blocs: [],
                page_id: this.props.data.page.id
            })
            getPageBlocs(this.props.data.page.id, (resp) => {
                this.setState({
                    blocs: resp.page_blocs,
                })
            })
        }
    }

    componentDidMount() {
        this.setBlocs()
    }

    componentDidUpdate() {
        this.setBlocs()
    }

    render() {        
        return (
            <>
                <div style={styles.right}>
                    <button style={styles.button} onClick={this.props.content.saveChanges}>Enregistrer les champs</button>
                </div>
                {this.state.blocs.map((bloc, index) => {
                    return(
                        <Bloc key={index} {...bloc} page_id={this.state.page_id}/>
                    )
                })}
                    <div style={styles.right}>
                    <button style={styles.button} onClick={this.props.content.saveChanges}>Enregistrer les champs</button>
                </div>
            </>
        );
    }
}

export default EditContent;

const styles = {
    button: {
        border: 'none',
        margin: '0 20px 0 0',
        padding: '.5em 1em',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '4px',
        textShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        background: 'rgb(28, 184, 65)',
    },
    right: {
        textAlign: 'right',
    },
}