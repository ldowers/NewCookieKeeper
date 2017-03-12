import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//======================================
//code to make cells editable
const cellEditProp = {
    mode: 'click'
};
//======================================

//======================================
//code to insert rows
function onAfterInsertRow(row) {
    let newRowStr = '';

    for (const prop in row) {
        newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
}

const options = {
    afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};
//======================================

//======================================
//code to delete rows
function onAfterDeleteRow(rowKeys) {
    alert('The rowkey you drop: ' + rowKeys);
}

const deleteOptions = {
    afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};
//======================================

const Information = ({girls}) => (
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
    options={deleteOptions}
    csvFileName='Girls Info.csv'>
      <TableHeaderColumn dataField='id' csvHeader='ID' isKey={true}>ID#</TableHeaderColumn>
      <TableHeaderColumn dataField='name' csvHeader="Girl's Name">Girl's Name</TableHeaderColumn>
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
