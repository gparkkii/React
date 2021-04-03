import React, { useContext, memo } from 'react';
import TR from './TR';
import { TableContext } from '../../pages/MineSweeper';

const Table = memo(() => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => <TR rowIndex={i} />)}
    </table>
  )
});

export default Table;
