import React from 'react';
import { getBlocFieldsGroups } from '../../api/functions';
import FieldsGroup from './FieldsGroup';

class Bloc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldsgroups: [],
            bloc_id: null,
        }
    }

    componentDidMount() {
        if (this.state.bloc_id !== this.props.bloc_id) {
            this.setState({
                fieldsgroups: [],
                bloc_id: this.props.bloc_id
            });
            let bloc = this.props.bloc_id;
            getBlocFieldsGroups(bloc, (resp) => {
                this.setState({
                    fieldsgroups: resp.bloc_fieldsgroups
                })
            })
        }
    }

    componentDidUpdate() {
        if (this.state.bloc_id !== this.props.bloc_id) {
            this.setState({bloc_id: this.props.bloc_id});
            let bloc = this.props.bloc_id;
            getBlocFieldsGroups(bloc, (resp) => {
                this.setState({
                    fieldsgroups: resp.bloc_fieldsgroups
                })
            })
        }
    }

    componentWillUnmount() {
        this.setState({
            fieldsgroups: [],
        });
    }

    render() {
        const fieldsgroups = this.state.fieldsgroups;
        return (
            <div style={styles.bloc}>
                <p>Bloc {this.state.bloc_id}</p>
                    {fieldsgroups.map((fieldsgroup, index) => 
                        <FieldsGroup key={index} {...fieldsgroup} {...this.props}/>
                    )}
            </div>
        )
    }
}

export default Bloc;

const styles = {
    bloc: {
        border: '2px solid #ccc',
        borderRadius: '4px',
        padding: '3%',
        margin: '1%',
    }
}