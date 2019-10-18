import React, { Component } from 'react';
import { getPageBlocs } from '../../api/functions'
import Bloc from './Bloc';

class EditContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocs: [],
            id_page: null,
            id_modele: null,
        }
    }

    setBlocs = () => {
        let page = JSON.parse(localStorage.getItem('page'));
        // if (this.state.id_page !== this.props.data.page.id){
        if (this.state.id_page !== page.id){
            this.setState({
                id_page: page.id
            })
            this.setState({
                blocs: []
            })
            getPageBlocs(page.id_modele, (resp) => {
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
            <div style={styles.position}>
                <div style={styles.right}>
                    {this.state.blocs !== [] && <button style={styles.button} onClick={this.props.content.saveChanges}>Enregistrer les champs</button>}
                </div>
                {this.state.blocs.map((bloc, index) => {
                    return(
                        <Bloc key={index} {...bloc}/>
                    )
                })}
                <div style={styles.right}>
                    {this.state.blocs !== [] && <button style={styles.button} onClick={this.props.content.saveChanges}>Enregistrer les champs</button>}
                </div>
            </div>
        );
    }
}

export default EditContent;

const styles = {
    position:{
        paddingTop: 180,
        paddingBottom: 10,
    },
    button: {
        border: 'none',
        margin: '0',
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