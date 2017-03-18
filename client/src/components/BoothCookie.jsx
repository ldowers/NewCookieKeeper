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

const BoothCookie = ({boothCookies, options}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Booth Cookie Inventory"
      />
    </Card>
    
    {/*Booth Cookie Inventory Table*/}
    <BootstrapTable 
    data={boothCookies} 
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options} 
    csvFileName='Booth Cookie Inventory.csv'>
      
        <TableHeaderColumn dataField='_id' isKey={ true } hidden hiddenOnInsert autoValue>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='location' csvHeader="Location">Location</TableHeaderColumn>
        <TableHeaderColumn dataField='start' csvHeader="Start" columnClassName="dateColumn" >Start</TableHeaderColumn>
        <TableHeaderColumn dataField='end' csvHeader="End" columnClassName="dateColumn" >End</TableHeaderColumn>
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

BoothCookie.propTypes = {
  boothCookies: PropTypes.array.isRequired
};

export default BoothCookie;
