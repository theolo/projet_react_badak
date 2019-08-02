import React from 'react';
import { DataContext } from '../../store/DataProvider';

import SideNav from '../../components/SideBar/SideBar';
import EditContent from '../../components/Test/EditContent';
import TopPageContent from '../../components/Test/TopPageContent';
import ContentProvider from '../../store/ContentProvider';

class EditPage extends React.Component {

    componentDidMount() {
        if(!localStorage.page)
            this.props.history.push('/projets/pages');
    }



    render() {
        // console.log(this.context)
        return (
            <div>
                <SideNav history={this.props.history}/>
                <div className='m-sidebar'>
                        <TopPageContent />
                    <hr />
                    <div>
                        <ContentProvider>
                            <EditContent />
                        </ContentProvider>
                    </div>
                </div>
            </div>
        )
    }
}
EditPage.contextType = DataContext;

export default EditPage;