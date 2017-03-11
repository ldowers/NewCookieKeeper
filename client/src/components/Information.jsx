import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Information = ({ secretData }, {girls}) => (
  <div>
  <Card className="container">
    <CardTitle
      title="Information"
      subtitle="You should get access to this page only after authentication."
    />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>

  <Card className="container">
    <CardTitle
      title="Girls info"
    />
    {girls && <CardText style={{ fontSize: '12px', color: 'blue' }}>{girls}</CardText>}
  </Card>
  </div>
);

//typechecks the incoming props
//validates that secretData is a string
//validates that girls is an object
//isRequired displays a warning if the prop isn't provided
Information.propTypes = {
  secretData: PropTypes.string.isRequired,
  girls: PropTypes.object.isRequired
};

export default Information;
