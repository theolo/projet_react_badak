import React from 'react';
import EditBloc from './EditBloc';

class ZoneContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocs: [],
            section: false,
            custom: false,
        }
    }

    componentDidMount() {
        
    }

    addBlock = () => {
        this.setState({blocs: [...this.state.blocs, 1]})
    }

    render() {
        const { blocs } = this.state
        return (
            <div>
                <div>
                    {blocs.map((bloc, index) => {
                        return (
                            <EditBloc />
                            )
                        })}
                </div>
                <button onClick={ this.addBlock }>Ajouter un bloc</button>
            </div>
        )
    }
}

export default ZoneContent;