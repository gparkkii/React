import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component {
    render() {
        return(
            <>
                <TableRow key={this.props.id} >
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src = {this.props.image} alt = "profile" style={{width: 120, height:120}}/></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.age}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                    <TableCell> <CustomerDelete stateRefresh= {this.props.stateRefresh} id= {this.props.id} /> </TableCell>
                </TableRow>
            </>
        ) 
    }
}

export default Customer;










