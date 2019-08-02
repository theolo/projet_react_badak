import React from 'react';
import CustomField from './CustomField';


class EditBloc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            section: false,
            custom: false,
        }
    }

    handleClick = (e) => {
        const name = e.target.name
        this.setState({[name]: !this.state.name})
    }

    render() {
        const { section, custom } = this.state
        if(!section && !custom) {
            return (
                <div className='bloc'>
                    <button name='section' onClick={this.handleClick}>Section</button>
                    <button name='custom' onClick={this.handleClick}>Custom</button>
                </div>
            )
        }else if(!section && custom) {
            return (
                <div className='bloc'>
                    <CustomField />
                </div>
            )
        }
        return (
            <div className='bloc'>
            </div>
        )
    }
}

export default EditBloc