import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import InfoSection from './InfoSection';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const userInfo = this.props.users;
    this.state = {
      userInfo
    };
  }

  // delete own credentials
  deleteOwnCredentials = (e) => {
    const { own_credentials } = this.state.userInfo;
    // index of button
    const index = Number(e.target.id);
    const newOwnCredentials = [
      ...own_credentials.slice(0, index),
      ...own_credentials.slice(index + 1)
    ];
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        own_credentials: newOwnCredentials
      }
    });
  };

  // delete users that shared credentials with me
  deleteSharedWithMeCredentials = (e) => {
    const { shared_with_me } = this.state.userInfo;
    // index of button
    const index = Number(e.target.id);
    const newSharedWithMeCredentials = [
      ...shared_with_me.slice(0, index),
      ...shared_with_me.slice(index + 1)
    ];
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        shared_with_me: newSharedWithMeCredentials
      }
    });
  };

  // delete users that shared credentials with others
  deleteSharedWithOthersCredentials = (e) => {
    const { shared_with_others } = this.state.userInfo;
    // index of button
    const index = Number(e.target.id);
    const newSharedWithOthersCredentials = [
      ...shared_with_others.slice(0, index),
      ...shared_with_others.slice(index + 1)
    ];
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        shared_with_others: newSharedWithOthersCredentials
      }
    });
  };

  render() {
    const { userInfo } = this.state;
    return (
      <Container>
        <h1>Hi {userInfo.name}, </h1>
        <h3>Username: {userInfo.username}</h3>
        <InfoSection
          credentials={userInfo.own_credentials}
          deleteCredentials={this.deleteOwnCredentials}
          title="Own Credentials"
        />
        <InfoSection
          credentials={userInfo.shared_with_me}
          deleteCredentials={this.deleteSharedWithMeCredentials}
          title="Shared With Me"
        />
        <InfoSection
          credentials={userInfo.shared_with_others}
          deleteCredentials={this.deleteSharedWithOthersCredentials}
          title="Shared With Others"
        />
      </Container>
    );
  }
}

Dashboard.propTypes = {
  users: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
};

export default Dashboard;
