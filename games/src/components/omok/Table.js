import React from 'react';
import TR from './TR';

function Table({dispatch, tableData}) {
  return (
    <table>
      <tbody>
        {Array(tableData.length).fill().map((tr, i) => (
          <TR key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch}></TR>
        ))}
      </tbody>
    </table> 
  )
}

export default Table
