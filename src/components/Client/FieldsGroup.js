import React, { Component } from 'react';
import { getGroupFields } from '../../api/functions'
import Field from './Field';

import { ContentContext } from '../../store/ContentProvider';

class FieldsGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
            fieldsgroup_id: null,
        }
    }

    componentDidMount() {
        let group = this.props.fieldsgroup_id;   
        getGroupFields(group, (resp) => {
            this.setState({
                fields: resp.group_fields
            })
        })
    }

    componentDidUpdate() {
        if (this.state.fieldsgroup_id !== this.props.fieldsgroup_id) {
            this.setState({
                fields: [],
                fieldsgroup_id: this.props.fieldsgroup_id
            })
            getGroupFields(this.props.fieldsgroup_id, (resp) => {
                this.setState({
                    fields: resp.group_fields
                })
            })
        }
    }

    componentWillUnmount() {
        this.setState({
            fields: []
        })
    }

    render() {
        return (
            <div id="group">
                {this.state.fields.map((field,index) =>
                    <Field key={index} {...field} {...this.props}/>
                    )}
            </div>
        )
    }
}
FieldsGroup.contextType = ContentContext;

export default FieldsGroup;