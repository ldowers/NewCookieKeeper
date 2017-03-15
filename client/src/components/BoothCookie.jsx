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

function addUpCookies(boothCookies) {
    if(boothCookies.length === 0){
        return
    }

    for(let i = 0; i < boothCookies.length; i++){
        boothCookies[i].total =  
        boothCookies[i].TAL +
        boothCookies[i].SMR + 
        boothCookies[i].LEM + 
        boothCookies[i].SB + 
        boothCookies[i].TM + 
        boothCookies[i].PBP + 
        boothCookies[i].CD + 
        boothCookies[i].PBS + 
        boothCookies[i].GFT + 
        boothCookies[i].MCS; 

    }

    return boothCookies;
}


// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};
//======================================

const BoothCookie = ({boothCookies}) => (
  <div>
    <Card className="container">
      <CardTitle
        title="Booth Cookie Inventory"
      />
    </Card>
    
    {/*Booth Cookie Inventory Table*/}
    <BootstrapTable 
    data={addUpCookies(boothCookies)} 
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options} 
    csvFileName='Booth Cookie Inventory.csv'>
      
      <TableHeaderColumn dataField='_id' csvHeader="ID #" isKey={true} hidden>ID #</TableHeaderColumn>
      <TableHeaderColumn dataField='location' csvHeader="Location">Location</TableHeaderColumn>
      <TableHeaderColumn dataField='start' csvHeader="Start" >Start</TableHeaderColumn>
      <TableHeaderColumn dataField='end' csvHeader="End" >End</TableHeaderColumn>
      <TableHeaderColumn dataField='total' csvHeader="Total" >Total</TableHeaderColumn>
    </BootstrapTable>
  </div>
);

BoothCookie.propTypes = {
  boothCookies: PropTypes.array.isRequired
};

export default BoothCookie;
