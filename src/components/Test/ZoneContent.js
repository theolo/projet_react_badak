import React from 'react';
import EditBloc from './EditBloc';

class ZoneContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inc: 0,
            blocs: [{
                id: 1,
                ensemble: true,
                custom: false
            },
            {
                id: 2,
                ensemble: false,
                custom: true
            },
            {
                id: 3,
                ensemble: false,
                custom: false
            }],
        }
    }

    componentDidMount() {
        this.setState({
            inc: this.state.blocs[this.state.blocs.length-1].id + 1
        })
    }

    handleClick = (e) => {
        console.log(e.target);
        const { name, bloc_id } = e.target
        let blocs = this.state.blocs;
        for (let i in blocs) {
            if (i === bloc_id) {
                blocs[i][name] = true;
            }
        }        
        this.setState({
            blocs: blocs
        })
        // this.setState({[name]: !this.state.name})
    }

    addBlock = () => {
        this.setState({
            blocs: [...this.state.blocs, {id: this.state.inc + 1, ensemble: false, custom: false}],
            inc: this.state.inc + 1,
        })
    }

    deleteBlock = (e) => {
        console.log(e.target.id);
        let blocs = this.state.blocs;
        blocs.splice(e.target.id, 1)
        this.setState({
            blocs: blocs,
        });
    }

    render() {
        const { blocs } = this.state
        console.log(this.state);
        
        return (
            <div>
                <div style={styles.position}>
                    {blocs.map((bloc, index) => {
                        return (
                            <div key={index}>
                                <EditBloc deleteBlock={this.deleteBlock} handleClick={this.handleClick} id={index} bloc={bloc}/>
                            </div>
                            )
                        })}
                </div>
                <button onClick={ this.addBlock }>Ajouter un bloc</button>
            </div>
        )
    }
}

export default ZoneContent;

const styles = {
    position: {
        paddingTop: '2%'
    }
}