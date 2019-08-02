import React, { Component } from 'react';

// import { DataContext } from '../../store/DataProvider';
import { ContentContext } from '../../store/ContentProvider';

import { getPageBlocs } from '../../api/functions'
import Bloc from './Bloc';

class EditContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocs: []
        }
    }

    componentDidMount() {
        let page = JSON.parse(localStorage.page).id;
        getPageBlocs(page, (resp) => {
            this.setState({
                blocs: resp.page_blocs,
            })
        })
    }

    render() {
        return (
            <>
                <button onClick={this.context.saveChanges}>Enregistrer les champs</button>
                {this.state.blocs.map((bloc, index) => 
                    <Bloc key={index} {...bloc}/>
                )}
                <button onClick={this.context.saveChanges}>Enregistrer les champs</button>
            </>
        );
    }
}
EditContent.contextType = ContentContext;

export default EditContent;