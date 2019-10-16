import React, { Component } from 'react';
import styled from 'styled-components';

class ButtonList extends Component {
    
    render() { 
        const ButtonHover = styled.button`
            ${this.props.style}
            `

        return (
            <>
            {this.props.toList.map((item, index) => 
                <ButtonHover key={index} id={item.id} onClick={() => this.props.onClick(item)}>{item.entreprise ? item.entreprise : item.nom}</ButtonHover>
            )}
            </>
        );
    }
}

export default ButtonList;