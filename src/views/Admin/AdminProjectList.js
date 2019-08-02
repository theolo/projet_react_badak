            import React from 'react';
            import LogoutButton from '../../components/LogoutButton/LogoutButton';
            import ButtonList from '../../components/ButtonList';
            import { getProjects } from '../../api/functions';
            
            class AdminProjectList extends React.Component {
                constructor(props) {
                    super(props)
                    this.state = {
                        projets: [],
                    }
                }
            
                componentDidMount(){
                    // if(localStorage.getItem('id_user') === null)
                    //     this.props.history.push('/');
                    // else{
                    let id_user = JSON.parse(localStorage.getItem('UfA')).id
                    getProjects(id_user, (resp)=> {
                        this.setState({projets: resp.projets});
                    })
                    }
                // }
            
                handleClick = (e, id) => {
                    this.props.history.push(`/admin/clients/projets/pages`);
                }
            
                render() {
                    const { projets } = this.state
                    // if(localStorage.getItem('id_user') === null)
                    //     this.props.history.push('/');
                    return (
                        <div className='container w-20'>
                            {/* {this.state.users.map((user, index) =>
                                <button key={index} id={user.id} className='btn-violet' onClick={this.handleClick}>{user.entreprise}</button>
                                )} */}
                            <ButtonList toList={projets} onClick={(projet) => this.handleClick(projet)} />
                            <LogoutButton history={this.props.history} />
                        </div>
                    );
                }
            }
            
            export default AdminProjectList;