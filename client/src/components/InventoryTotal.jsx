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

function addUpCookies(inventoryTotal) {
    if(inventoryTotal.length === 0){
        return
    }
    console.log("inventory total: " + JSON.stringify(inventoryTotal, null, 4));

    for(let i = 0; i < inventoryTotal.length; i++){
        inventoryTotal[i].total =  
        inventoryTotal[i].TAL +
        inventoryTotal[i].SMR + 
        inventoryTotal[i].LEM + 
        inventoryTotal[i].SB + 
        inventoryTotal[i].TM + 
        inventoryTotal[i].PBP + 
        inventoryTotal[i].CD + 
        inventoryTotal[i].PBS + 
        inventoryTotal[i].GFT + 
        inventoryTotal[i].MCS; 
    }

    return inventoryTotal;
}

// function calculateRemaining (inventoryTotal){
//     if (inventoryTotal.length ===0){
//         return
//     }

//     for (let i=0; i<inventoryTotal.length; i++){
//         inventoryTotal[i].remaining =
//         inventoryTotal[i].TAL -
//         inventoryTotal[i+1].TAL -
//         inventoryTotal[i+2]; 
//     }
// }


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
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options} 
    options={deleteOptions}
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
