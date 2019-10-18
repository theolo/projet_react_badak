import React from 'react';
import EditBloc from './EditBloc';

class ZoneContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inc: 0,
            blocs: [{
                id: 1,
                section: true,
                custom: false
            },
            {
                id: 2,
                section: false,
                custom: true
            },
            {
                id: 3,
                section: false,
                custom: false
            }],
        }
    }

    componentDidMount() {
        this.setState({
            inc: this.state.blocs.length
        })
    }

    handleClick = (e) => {
        console.log(e.target);
        const { name, id } = e.target
        let blocs = this.state.blocs;
        for (let i in blocs) {
            if (blocs[i].id === id) {
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
            blocs: [...this.state.blocs, {id: this.state.inc + 1, section: false, custom: false}],
            inc: this.state.inc + 1,
        })
    }

    deleteBlock = (e) => {
        console.log(e.target);
        // let blocs = this.state.blocs;
        // blocs.splice(e.target.id, 1)
        // this.setState({
        //     blocs: blocs,
        //     inc: this.state.inc - 1
        // });
    }

    render() {
        const { blocs } = this.state
        console.log(blocs);
        
        return (
            <div>
                <div style={styles.position}>
                    {blocs.map((bloc, index) => {
                        return (
                            <div key={index}>
                                <EditBloc deleteBlock={this.deleteBlock} handleClick={this.handleClick} bloc={bloc}/>
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