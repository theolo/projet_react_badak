import React from 'react'

class CustomField extends React.Component {
    constructor(props){
    super(props);
    this.state = { 
        fields: [],
        choice: 'text',
        defined: '',
        }    
    }

    remove(index){
        this.state.fields.splice(index, 1)
        this.setState({fields: this.state.fields})
    }

    add = () => {
        this.setState({fields: [...this.state.fields, this.state.choice]})
    }

    handlechange = (e) => {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    handleSubmit = () => {
        console.log(this.state.fields);
    }
    
    render () {
        const {fields} = this.state;
    return (
        <div>
            <div>
                {fields.map((field, index) => {
                    if(field === 'textarea'){
                        return (
                            <div key={index}>
                                <textarea rows="6" cols="30"/>
                                <button onClick={(e) => this.remove(index)}>supprimer</button>
                            </div>
                        )
                    }
                    return (
                        <div className='field' key={index}>
                            <input type={field} name={`field${index}`} />
                            <button onClick={(e) => this.remove(index)}>supprimer</button>
                        </div>
                    )
                })}
            </div>
            <div>
                <select onChange={this.handlechange} name='choice' value={this.state.choice}>
                    <option value='text'>Texte</option>
                    <option value='textarea'>zone de texte</option>
                    <option value='button'>button</option>
                    <option value='file'>fichier</option>
                    <option value='checkbox'>checkbox</option>
                    <option value='radio'>radio</option>
                </select>
                <button onClick={ this.add }>Ajouter</button>
            </div>
            <button onClick={this.handleSubmit} type='submit'>enregistrer</button>
        </div>
    )
    }
}

export default CustomField;