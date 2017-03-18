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

const TroopCookie = ({troopCookies, options}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Troop Cookie Inventory"
      />
    </Card>

    {/*Troop Cookie Inventory Table*/}
    <BootstrapTable 
    data={troopCookies} 
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options} 
    csvFileName='Troop Cookie Inventory.csv'>

        <TableHeaderColumn dataField='_id' isKey={ true } hidden hiddenOnInsert autoValue>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='date' csvHeader="Date" >Date</TableHeaderColumn>
        <TableHeaderColumn dataField='type' csvHeader="Type" >Type</TableHeaderColumn>
        <TableHeaderColumn dataField='from' csvHeader="From" >From</TableHeaderColumn>
        <TableHeaderColumn dataField='to' csvHeader="To" >To</TableHeaderColumn>
        <TableHeaderColumn dataField='TAL' csvHeader="TAL" >TAL</TableHeaderColumn>
        <TableHeaderColumn dataField='SMR' csvHeader="SMR" >SMR</TableHeaderColumn>
        <TableHeaderColumn dataField='LEM' csvHeader="LEM" >LEM</TableHeaderColumn>
        <TableHeaderColumn dataField='SB' csvHeader="SB" >SB</TableHeaderColumn>
        <TableHeaderColumn dataField='TM' csvHeader="TM" >TM</TableHeaderColumn>
        <TableHeaderColumn dataField='PBP' csvHeader="PBP" >PBP</TableHeaderColumn>
        <TableHeaderColumn dataField='CD' csvHeader="CD" >CD</TableHeaderColumn>
        <TableHeaderColumn dataField='PBS' csvHeader="PBS" >PBS</TableHeaderColumn>
        <TableHeaderColumn dataField='GFT' csvHeader="GFT" >GFT</TableHeaderColumn>
        <TableHeaderColumn dataField='MCS' csvHeader="MCS" >MCS</TableHeaderColumn>
        <TableHeaderColumn dataField='total' csvHeader="Total" hiddenOnInsert >Total</TableHeaderColumn>
    
    </BootstrapTable>
  </div>
);

TroopCookie.propTypes = {
  troopCookies: PropTypes.array.isRequired
};

export default TroopCookie;
