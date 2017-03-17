import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//======================================
//code to make cells editable
const cellEditProp = {
    mode: 'click'
};
//======================================

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
    data={addUpCookies(troopCookies)} 
    cellEdit={cellEditProp} 
    insertRow={true} 
    deleteRow={true} 
    selectRow={selectRowProp} 
    exportCSV={ true }
    options={options} 
    csvFileName='Troop Cookie Inventory.csv'>

        <TableHeaderColumn dataField='_id' isKey={ true } hiddenOnInsert autoValue>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='date' csvHeader="Date" >Date</TableHeaderColumn>
        <TableHeaderColumn dataField='type' csvHeader="Type">Type</TableHeaderColumn>
        <TableHeaderColumn dataField='from' csvHeader="From" >From</TableHeaderColumn>
        <TableHeaderColumn dataField='to' csvHeader="To" >To</TableHeaderColumn>
        <TableHeaderColumn dataField='TAL' csvHeader="TAL" hidden>TAL</TableHeaderColumn>
        <TableHeaderColumn dataField='SMR' csvHeader="SMR" hidden>SMR</TableHeaderColumn>
        <TableHeaderColumn dataField='LEM' csvHeader="LEM" hidden>LEM</TableHeaderColumn>
        <TableHeaderColumn dataField='SB' csvHeader="SB" hidden>SB</TableHeaderColumn>
        <TableHeaderColumn dataField='TM' csvHeader="TM" hidden>TM</TableHeaderColumn>
        <TableHeaderColumn dataField='PBP' csvHeader="PBP" hidden>PBP</TableHeaderColumn>
        <TableHeaderColumn dataField='CD' csvHeader="CD" hidden>CD</TableHeaderColumn>
        <TableHeaderColumn dataField='PBS' csvHeader="PBS" hidden>PBS</TableHeaderColumn>
        <TableHeaderColumn dataField='GFT' csvHeader="GFT" hidden>GFT</TableHeaderColumn>
        <TableHeaderColumn dataField='MCS' csvHeader="MCS" hidden>MCS</TableHeaderColumn>
        <TableHeaderColumn dataField='total' csvHeader="Total" hiddenOnInsert >Total</TableHeaderColumn>
    
    </BootstrapTable>
  </div>
);

TroopCookie.propTypes = {
  troopCookies: PropTypes.array.isRequired
};

export default TroopCookie;
