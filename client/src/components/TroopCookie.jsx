import React, {PropTypes} from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const TroopCookie = ({troopCookies}) => (
    <div>
        <Card className="container">
            <CardTitle title="Troop Cookie Inventory"/>
        </Card>

        {/*Troop Cookie Inventory Table*/}
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>From</TableHeaderColumn>
                    <TableHeaderColumn>To</TableHeaderColumn>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Total</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {troopCookies.map(function(troopCookies, index) {
                    return (
                        <TableRow key={index}>
                            <TableRowColumn>{troopCookies.type}</TableRowColumn>
                            <TableRowColumn>{troopCookies.from}</TableRowColumn>
                            <TableRowColumn>{troopCookies.to}</TableRowColumn>
                            <TableRowColumn>{troopCookies.date}</TableRowColumn>
                            <TableRowColumn>{troopCookies.TAL
                                + troopCookies.SMR
                                + troopCookies.LEM
                                + troopCookies.SB
                                + troopCookies.TM
                                + troopCookies.PBP
                                + troopCookies.CD
                                + troopCookies.PBS
                                + troopCookies.GFT
                                + troopCookies.MCS}
                            </TableRowColumn>
                        </TableRow>
                    )}
                )}
            </TableBody>
        </Table>
    </div>
);

TroopCookie.propTypes = {
    troopCookies: PropTypes.array.isRequired
};

export default TroopCookie;