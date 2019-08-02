import React, { Component } from 'react';

class ButtonList extends Component {
    onClick = param => e => {
        this.props.onClick(param)
    }

    render() { 
        // console.log(this.props)
        return ( 
            <>
            {this.props.toList.map((item, index) => 
                <button key={index} id={item.id} onClick={this.onClick(item)}>{item.entreprise ? item.entreprise : item.nom}</button>
            )}
            </>
        );
    }
}

export default ButtonList;