import React, { memo, useCallback, useEffect, useRef } from 'react';
import { CLICK_CELL } from '../../pages/Omok';
import styled from 'styled-components';

const StyledTD = styled.td`
  border: 1px solid;
  width: 80px;
  height: 80px;
`

const TD = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log('td rendered');

  // 불필요한 렌더링 확인하는 방법
  // const ref = useRef();
  // useEffect(() => {
  //   console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], cellData === ref.current[2], dispatch === ref.current[3]);
  //   ref.current = [rowIndex, cellIndex, cellData, dispatch];
  // }, [rowIndex, cellIndex, cellData, dispatch])


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
    <StyledTD onClick={onClickTd}>{cellData}</StyledTD>
  )
});

export default TD;
