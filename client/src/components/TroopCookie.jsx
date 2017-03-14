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

const TroopCookie = ({troopCookies}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Troop Cookie Inventory"
      />
    </Card>

    {console.log("troopCookies is: " +troopCookies)}
    {console.log("troopCookies[0] is: " + JSON.stringify(troopCookies[0]),null, 4)}
    {/*{console.log("troopCookies[0].TAL is: " + troopCookies[0]['TAL'])}*/}
    
    {/*Troop Cookie Inventory Table*/}
    <BootstrapTable 
    data={troopCookies} 
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options} 
    options={deleteOptions}
    csvFileName='Troop Cookie Inventory.csv'>
      
      <TableHeaderColumn dataField='type' csvHeader="Cookie" isKey={true}>Cookie Type</TableHeaderColumn>
      <TableHeaderColumn dataField='to' csvHeader="To" >To</TableHeaderColumn>
      <TableHeaderColumn dataField='from' csvHeader="From" >From</TableHeaderColumn>
       <TableHeaderColumn dataField='date' csvHeader="Date" >Date</TableHeaderColumn>
    
    </BootstrapTable>
  </div>
);

TroopCookie.propTypes = {
  troopCookies: PropTypes.array.isRequired
};

export default TroopCookie;
