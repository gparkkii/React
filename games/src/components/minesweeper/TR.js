import React, { useContext, memo } from 'react';
import TD from './TD';
import { TableContext } from '../../pages/MineSweeper';

const TR = memo(({ rowIndex }) => {
  const { tableData } = useContext(TableContext);

  return (
    <tr>
      {tableData[0] && Array(tableData[0].length).fill().map((td, i) =>
        <TD rowIndex={rowIndex} cellIndex={i} />
      )}
    </tr>
  )
});

export default TR;