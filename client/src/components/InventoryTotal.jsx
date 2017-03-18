import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const InventoryTotal = ({inventoryTotal}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Inventory Totals"
      />
    </Card>
    
    {/*Inventory Totals Table*/}
    <BootstrapTable 
    data={inventoryTotal} 
    exportCSV={ true }
    csvFileName='Inventory Totals.csv'>

      <TableHeaderColumn dataField='_id' csvHeader="ID#" isKey={true} hidden>ID #</TableHeaderColumn>
      <TableHeaderColumn dataField='from' csvHeader="From">From</TableHeaderColumn>
      <TableHeaderColumn dataField='TAL' csvHeader="TAL" >TAL</TableHeaderColumn>
      <TableHeaderColumn dataField='SMR' csvHeader="SMR">SMR</TableHeaderColumn>
      <TableHeaderColumn dataField='LEM' csvHeader="LEM">LEM</TableHeaderColumn>
      <TableHeaderColumn dataField='SB' csvHeader="SB">SB</TableHeaderColumn>
      <TableHeaderColumn dataField='TM' csvHeader="TM">TM</TableHeaderColumn>
      <TableHeaderColumn dataField='PBP' csvHeader="PBP">PBP</TableHeaderColumn>
      <TableHeaderColumn dataField='CD' csvHeader="CD">CD</TableHeaderColumn>
      <TableHeaderColumn dataField='PBS' csvHeader="PBS">PBS</TableHeaderColumn>
      <TableHeaderColumn dataField='GFT' csvHeader="GFT">GFT</TableHeaderColumn>
      <TableHeaderColumn dataField='MCS' csvHeader="MCS">MCS</TableHeaderColumn>
      <TableHeaderColumn dataField='total' csvHeader="Total">Total</TableHeaderColumn>
      
    </BootstrapTable>
  </div>
);

InventoryTotal.propTypes = {
  inventoryTotal: PropTypes.array.isRequired
};

export default InventoryTotal;
