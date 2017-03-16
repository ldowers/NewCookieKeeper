import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//======================================
//code to make cells editable
const cellEditProp = {
    mode: 'click'
};
//======================================

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};
//======================================

const Information = ({girls, options}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Girls info"
      />
    </Card>
    
    {/*Girls Info Table*/}
    <BootstrapTable 
    data={girls} 
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options}
    csvFileName='Girls Info.csv'>
      
    <TableHeaderColumn dataField='name' csvHeader="Girl's Name" isKey={true}>Girl's Name</TableHeaderColumn>
    </BootstrapTable>
  </div>
);

//typechecks the incoming props
//validates that girls is an object
//isRequired displays a warning if the prop isn't provided
Information.propTypes = {
  girls: PropTypes.array.isRequired
};

export default Information;
