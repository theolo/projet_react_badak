import React, { createContext, Component } from "react";

export const DataContext = createContext({});

class DataProvider extends Component {
    state = {
        user: {
            id: null,
            nom: null,
            prenom: null,
            entreprise: null,
            email: null,
            admin: null
        },
        project: {
            id: null,
            nom: null,
            description: null,
            id_user: null
        },
        page: {
            id: null,
            nom: null,
            description: null,
            titre: null,
            h1: null,
            url: null,
            id_projet: null,
            id_modele: null
        },
        pages: [],
        setUser: user => this.setState({ user: user }),
        setProject: project => this.setState({ project: project }),
        setPage: page => this.setState({ page: page }),
        setPages: pages => this.setState({ pages: pages}),
    };

    componentDidMount() {
        if (localStorage.user) {
            this.setState({
                page: JSON.parse(localStorage.user),
            })
        }
        if (localStorage.projet) {
            this.setState({
                page: JSON.parse(localStorage.projet),
            })
        }
        if (localStorage.page) {
            this.setState({
                page: JSON.parse(localStorage.page),
            })
        }
    }

    render() {
        return (
        <DataContext.Provider value={{...this.state}}>
            {this.props.children}
        </DataContext.Provider>
        );
    }
}

export default DataProvider;