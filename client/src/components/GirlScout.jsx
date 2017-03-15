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
    afterInsertRow: onAfterInsertRow,   // A hook for after insert rows
    afterDeleteRow: onAfterDeleteRow
};
//======================================

//======================================
//code to delete rows
function onAfterDeleteRow(rowKeys) {
    alert('The rowkey you drop: ' + rowKeys);
}


// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};
//======================================

const GirlScout = ({girlCookies}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Girl Scout Cookie Inventory"
      />
    </Card>

    
    {/*Girl Scout Cookie Inventory Table*/}
    <BootstrapTable 
    data={girlCookies} 
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options} 
    csvFileName='Girl Scout Cookie Inventory.csv'>
      
      <TableHeaderColumn dataField='_id' csvHeader="ID#" isKey={true} hidden >ID #</TableHeaderColumn>
      <TableHeaderColumn dataField='name' csvHeader="Girl's Name">Girl's Name</TableHeaderColumn>
      <TableHeaderColumn dataField='date' csvHeader="Date" >Date</TableHeaderColumn>
      
    
    </BootstrapTable>
  </div>
);

GirlScout.propTypes = {
  girlCookies: PropTypes.array.isRequired
};

export default GirlScout;
