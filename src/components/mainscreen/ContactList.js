import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import firebase from 'firebase';
import { userFetch, chatTable } from '../../actions';
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
    // onNavigate() {
    //   let chatt = this.props.usercontact
    //   this.props.chatTable(chatt)
    //   //this.props.chatTable(this.props.navigation.navigate('ContactDetail'))
    //
    // }

  render() {
    // const { navigate } = this.props.navigation;
    console.log(this.props.usercontact)
    return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={rowData => (
            <ContactItem onPress={() => this.props.chatTable(rowData)} {...rowData} />
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
export default connect(mapStateToProps, { userFetch, chatTable })(ContactList);
