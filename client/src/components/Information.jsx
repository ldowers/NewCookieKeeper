import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Information = ({girls}) => (
  <div>
  <Card className="container">
    <CardTitle
      title="Girls info"
    />
    <div>
      This is where girls info goes
    </div>
    {/*} {girls && <CardText style={{ fontSize: '12px', color: 'blue' }}>{girls[0]}</CardText>}*/}
  </Card>
  </div>
);

//typechecks the incoming props
//validates that girls is an object
//isRequired displays a warning if the prop isn't provided
Information.propTypes = {
  girls: PropTypes.array.isRequired
};

export default Information;
