import React from 'react';
import SideNav from '../../components/SideBar/SideBar';
import ZoneContent from '../../components/Test/ZoneContent';

class ProjectModif extends React.Component {
    render() {
        return (
            <div>
                <SideNav history={this.props.history}/>
                <div className="m-sidebar">
                    <div className='top_page'>
                        <div className='d-flex-100'>
                            <p>title :</p>
                            <input type='text' />
                        </div>

                        <div className='d-flex-100'>
                            <p>h1 :</p>
                            <input type='text' />
                        </div>

                        <div className='d-flex-100'>
                            <p>URL :</p>
                            <input type='text' />
                        </div>
                    </div>
                    <hr />
                    <ZoneContent />
                </div>
            </div>
        )
    }
}

export default ProjectModif;