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

function addUpCookies(troopCookies) {
    if(troopCookies.length === 0){
        return
    }

    for(let i = 0; i < troopCookies.length; i++){
        troopCookies[i].total =  
        troopCookies[i].TAL +
        troopCookies[i].SMR + 
        troopCookies[i].LEM + 
        troopCookies[i].SB + 
        troopCookies[i].TM + 
        troopCookies[i].PBP + 
        troopCookies[i].CD + 
        troopCookies[i].PBS + 
        troopCookies[i].GFT + 
        troopCookies[i].MCS; 

    }

    return troopCookies;
}

const deleteOptions = {
    afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};
//======================================

// if (troopCookies != 0){
// this.addUpCookies(troopCookies);
// }


const TroopCookie = ({troopCookies}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Troop Cookie Inventory"
      />
    </Card>

    {/*{console.log(this.addUpCookies(troopCookies))}*/}
{/*
    {console.log("troopCookies is: " + troopCookies)}
    {console.log("troopCookies[0] is: " + JSON.stringify(troopCookies[0], null, 4))}
    {
        console.log("troopcookies[0].tal " + troopCookies[0].TAL)
    }*/}
    {/*Troop Cookie Inventory Table*/}
    <BootstrapTable 
    data={addUpCookies(troopCookies)} 
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options} 
    csvFileName='Troop Cookie Inventory.csv'>
      
      <TableHeaderColumn dataField='_id' csvHeader="ID #" isKey={true}hidden >ID #</TableHeaderColumn>
      <TableHeaderColumn dataField='type' csvHeader="Cookie">Cookie Type</TableHeaderColumn>
      <TableHeaderColumn dataField='to' csvHeader="To" >To</TableHeaderColumn>
      <TableHeaderColumn dataField='from' csvHeader="From" >From</TableHeaderColumn>
       <TableHeaderColumn dataField='date' csvHeader="Date" >Date</TableHeaderColumn>
       <TableHeaderColumn dataField='total' csvHeader="Total" >Total</TableHeaderColumn>
    
    </BootstrapTable>
  </div>
);

TroopCookie.propTypes = {
  troopCookies: PropTypes.array.isRequired
};

export default TroopCookie;
