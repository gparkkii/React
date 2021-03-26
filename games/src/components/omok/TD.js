import React, { memo, useCallback } from 'react';
import { CLICK_CELL } from '../../pages/Omok';

const TD = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log('td rendered');

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    console.log(cellData);
    if (cellData) {
      alert('다른 칸을 눌러주세요');
      return;
    } else { 
      dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }
  }, [cellData]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
});

export default TD;
