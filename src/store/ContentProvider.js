import React, { createContext, Component } from "react";

import { updatePageFields } from '../api/functions'

export const ContentContext = createContext({});

class ContentProvider extends Component {
    state = { 
        fields: [],
        changeField: (field_id, page_id, content) => {
            let filtered = this.state.fields.filter((field) => (field.field_id===field_id && field.page_id===page_id));
            if(filtered.length < 1) {
                this.setState(state => {
                    const fields = state.fields.concat({field_id: field_id, page_id: page_id, content: content});
                    return {
                        fields
                    };
                })
            }
            else {
                for (let i = 0 ; i < this.state.fields.length ; i++) {
                    if (this.state.fields[i].field_id === field_id && this.state.fields[i].page_id === page_id) {
                        let fields = [...this.state.fields];
                        let field = {...this.state.fields[i]};
                        field.content = content;
                        fields[i] = field;
                        this.setState({fields});
                    }
                }
            }
        },
        saveChanges: () => {
            if(this.state.fields.length === 0) {
                alert("pas de changement")
            }else{
                this.state.fields.map(field => {
                    updatePageFields(field, (resp) => {
                    })
                    return null;
                })
                alert("Les modifications on été enregistrées.");
                this.setState({fields: []})
            }
        },
    }
    
    render() {
        return (
        <ContentContext.Provider value={{...this.state}}>
            {this.props.children}
        </ContentContext.Provider>
        );
    }
}

export default ContentProvider;