import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const InfoCard = ({
  website, username, id, deleteCredentials
}) => (
  <Card>
    <Card.Content>
      <Card.Header>Website: {website}</Card.Header>
      <Card.Meta>Username: {username}</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button id={id} onClick={deleteCredentials} negative>
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
);

InfoCard.propTypes = {
  website: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteCredentials: PropTypes.func.isRequired
};

export default InfoCard;
