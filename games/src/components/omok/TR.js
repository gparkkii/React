import React, { memo } from 'react';
import TD from './TD';

const TR = memo(({rowData, rowIndex, dispatch}) => {
  console.log('tr rendered');
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => (
        <TD 
          key={i}
          cellIndex={i} 
          cellData={rowData[i]} 
          rowIndex={rowIndex}
          dispatch={dispatch}
          >{''}
        </TD>
      ))}
    </tr>
  )
});

export default TR;
