import React, { Component } from 'react';
import styled from 'styled-components';

class ButtonList extends Component {
    onClick = param => e => {
        this.props.onClick(param)
    }
    
    render() { 
        const ButtonHover = styled.button`
            ${this.props.styles.button}
            `

        return ( 
            <>
            {this.props.toList.map((item, index) => 
                <ButtonHover key={index} id={item.id} onClick={this.onClick(item)}>{item.entreprise ? item.entreprise : item.nom}</ButtonHover>
            )}
            </>
        );
    }
}

export default ButtonList;