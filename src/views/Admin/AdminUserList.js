import React from 'react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { getUsers } from '../../api/functions'
import ButtonList from '../../components/ButtonList';

class AdminUserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount(){
        // if(localStorage.getItem('id_user') === null)
        //     this.props.history.push('/');
        // else{
            getUsers((resp)=> {
                this.setState({users: resp.users});
            })
        }
    // }

    handleClick = (param) => {
        localStorage.setItem('UfA', JSON.stringify(param));
        this.props.history.push(`/admin/clients/projets`);
    }

    render() {
        const { users } = this.state
        // if(localStorage.getItem('id_user') === null)
        //     this.props.history.push('/');
        return (
            <div className='container w-20'>
                {/* {this.state.users.map((user, index) =>
                    <button key={index} id={user.id} className='btn-violet' onClick={this.handleClick}>{user.entreprise}</button>
                    )} */}
                <ButtonList toList={users} onClick={(user) => this.handleClick(user)} />
                <LogoutButton history={this.props.history} />
            </div>
        );
    }
}

export default AdminUserList;