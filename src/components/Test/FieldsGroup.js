import React, { Component } from 'react';
import { getGroupFields } from '../../api/functions'
import Field from './Field';

import { ContentContext } from '../../store/ContentProvider';

class FieldsGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
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