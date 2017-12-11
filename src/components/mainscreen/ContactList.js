import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { userFetch } from '../../actions';
import ContactItem from './ContactItem';

class ContactList extends Component {
  componentWillMount() {
    this.props.userFetch();

    this.createDataSource(this.props);
  }
    componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps);
    }

    createDataSource({ usercontact }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(usercontact);
    }

    // renderRow(users) {
    //   const { navigate } = this.props.navigation;
    //
    //   return
    // }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={rowData => (
            <ContactItem onPress={() => navigate('ChattScreen', { user: rowData.name })} {...rowData} />
          )}

        />
    );
  }
}

const mapStateToProps = state => {
  const usercontact = _.map(state.usercontact, (val, uid) => {
    return { ...val, uid };
  });
  return { usercontact };
};
export default connect(mapStateToProps, { userFetch })(ContactList);
