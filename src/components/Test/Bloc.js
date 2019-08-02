import React from 'react';
import { getBlocFieldsGroups } from '../../api/functions';
import FieldsGroup from './FieldsGroup';
import { ContentContext } from '../../store/ContentProvider';

class Bloc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldsgroups: [],
        }
    }

    componentDidMount() {
        let bloc = this.props.bloc_id;
        getBlocFieldsGroups(bloc, (resp) => {
            this.setState({
                fieldsgroups: resp.bloc_fieldsgroups
            })
        })
    }

    render() {
        const fieldsgroups = this.state.fieldsgroups;
        return (
            <div className="bloc">
                <p>Bloc {this.props.bloc_id}</p>
                    {fieldsgroups.map((fieldsgroup, index) => 
                        <FieldsGroup key={index} {...fieldsgroup} {...this.props}/>
                        )}
            </div>
        )
    }
}
Bloc.contextType = ContentContext;

export default Bloc;