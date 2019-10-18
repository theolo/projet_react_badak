import React from 'react';

import SideBar from '../../components/SideBar/SideBar';
// import EditContent from '../../components/Client/EditContent';
// import TopPageContent from '../../components/Client/TopPageContent';
// import ContentProvider from '../../store/ContentProvider';
import { DataContext } from '../../store/DataProvider';
import { ContentContext } from '../../store/ContentProvider';
import ZoneContent from '../../components/Test/ZoneContent';

class AdminProjectModif extends React.Component {

    componentDidMount() {
        if(!localStorage.page)
            this.props.history.push('/projets/pages');
        
        // if(!this.context.page.id)
        //     this.props.history.push('/projets/pages');
    }

    render() {
        return (
            <DataContext.Consumer>{(data) => {
                return(
                    <ContentContext.Consumer>{(content) => {
                        return (
                            <div>
                                <SideBar history={this.props.history} content={content} data={data}/>
                                <div style={styles.content}>
                                    <ZoneContent />
                                </div>
                            </div>
                        );
                    }}</ContentContext.Consumer>
                );
            }}</DataContext.Consumer>                    
        )
    }
}
AdminProjectModif.contextType = DataContext;

export default AdminProjectModif;

const styles = {
    content: {
        width: '80%',
        marginLeft: 'auto',
        marginBottom: 0,
    }
}