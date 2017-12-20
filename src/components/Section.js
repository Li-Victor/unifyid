import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import InfoCard from './InfoCard';

const Section = ({ credentials, deleteCredentials, title }) => {
  const AllCredentials = credentials.map((credential, id) => (
    <InfoCard
      key={credential.password_id}
      id={id}
      website={credential.website}
      username={credential.username}
      deleteCredentials={deleteCredentials}
    />
  ));

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '12px' }}>{title}</h1>
      <Card.Group>{AllCredentials}</Card.Group>
    </div>
  );
};

Section.propTypes = {
  credentials: PropTypes.arrayOf(PropTypes.shape({
    website: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })).isRequired,
  deleteCredentials: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Section;
