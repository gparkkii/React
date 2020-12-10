import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth : 640
  }
})

const customers = [
  {
    'id': '1',
    'image': 'https://placeimg.com/120/120/1',
    'name': '박지연',
    'age': '28세',
    'birthday': '1993년 12월 1일',
    'job': '취준생',
  },
  {
    'id': '2',
    'image': 'https://placeimg.com/120/120/2',
    'name': '백근우',
    'age': '26세',
    'birthday': '1995년 10월 17일',
    'job': '취준생',
  },
  {
    'id': '3',
    'image': 'https://placeimg.com/120/120/3',
    'name': '보노보노',
    'age': '알려진바 없음',
    'birthday': '알려진바 없음',
    'job': '취준생',
  },
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className = { classes.root } >
        <Table className = { classes.table }>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>프로필</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>나이</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map( i => {
                return (
                  <Customer
                    key = {i.id}
                    id = {i.id}
                    image = {i.image}
                    name = {i.name}
                    age = {i.age}
                    birthday = {i.birthday}
                    job = {i.job}
                  />
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);





