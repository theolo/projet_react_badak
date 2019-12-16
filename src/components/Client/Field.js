import React, { Component } from 'react';
import { ContentContext } from '../../store/ContentProvider';
import { getFieldContent } from '../../api/functions';

class Field extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    componentDidMount() { 
        this._isMounted = true;
        getFieldContent(this.props.field_id, JSON.parse(localStorage.page).id, (resp) => {
            if(this._isMounted) {
                if (resp.content === false) {
                    this.setState({
                        value: '',
                    })
                } else {
                    this.setState({
                        value: resp.content
                    })
                }
            }
        })
    }
        // if(this.props.field_type === 'button') {
        //     this.setState({
        //         value: this.props.field_content,
        //     })
        // } else {
        //     this.setState({
        //         value: this.props.field_content,
        //     })
        // }
        // this.context.setInitial({field_id: this.props.field_id, page_id: JSON.parse(localStorage.page).id, content: this.props.field_content})
        // this.context.setFields({field_id: this.props.field_id, page_id: JSON.parse(localStorage.page).id, content: this.props.field_content})


    componentWillUnmount() {
        this._isMounted = false;
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })        
        this.context.changeField(this.props.field_id, JSON.parse(localStorage.page).id, e.target.value)
    }

    render() {
        const field = this.props;
        return (
            <>
            {field.field_type === "textarea" ? 
            <div>
                <label style={{display: "block"}}>
                    {field.field_name} :
                </label>
                <textarea style={styles.textarea} id={field.field_id} value={this.state.value} onChange={this.handleChange} rows="7" cols="80"/>
            </div>
            :
            <div>
                <label>
                    {field.field_name} :
                    <input style={styles.input} type="text" id={field.field_id} value={this.state.value} onChange={this.handleChange}/>
                </label>
            </div>
            }
            </>
        )
        // if(field.field_type === "textarea") {
        //     return (
        //         <div>
        //             <label style={{display: "block"}}>
        //                 {field.field_name} :
        //             </label>
        //                 <textarea style={styles.textarea} id={field.field_id} value={this.state.value} onChange={this.handleChange} rows="7" cols="80"/>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <label>
        //                 {field.field_name} :
        //                 <input style={styles.input} type="text" id={field.field_id} value={this.state.value} onChange={this.handleChange}/>
        //             </label>
        //         </div>
        //     );
        // }
    }
}
Field.contextType = ContentContext;

export default Field;

const styles = {
    textarea: {
        width: '100%',
        height: '150px',
        padding: '12px 20px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
    },
    input: {
        width: '100%',
        padding: '5px 5px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
    }
}