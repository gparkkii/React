import React, { useCallback, useState, useContext } from 'react';
import styled from 'styled-components';
import { START_GAME, TableContext } from '../../pages/MineSweeper';

const StyledForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Label = styled.label`
  color: #757575;
  font-size: 15px;
`
const Input = styled.input`
  width: 80px;
  margin: 0px 10px;
`
const Button = styled.button`
  display: inline-block;
  width: 80px;
  margin: 0px 10px;
  background-color: navy;
  color: #eaeaea;
`

const Form = () => {
  const [row, setRow] = useState('');
  const [cell, setCell] = useState('');
  const [mine, setMine] = useState('');
  const { dispatch } = useContext(TableContext);

  const onChangeRow = useCallback((e) => {
    if(e.target.value > 25) {
      alert('세로의 길이가 25 이상을 넘길 수 없습니다.');
    } else {
      setRow(e.target.value);
    }
  },[]);

  const onChangeCell = useCallback((e) => {
    if(e.target.value > 25) {
      alert('세로의 길이가 25 이상을 넘길 수 없습니다.');
    } else {
      setCell(e.target.value);
    }
  },[]);

  const onChangeMines = useCallback((e) => {
    console.log(row*cell)
    if(e.target.value > row*cell) {
      alert('지뢰의 갯수가 가로와 세로의 길이를 넘길 수 없습니다.');
    } else {
      setMine(e.target.value);
    }
  },[row, cell]);
  
  const onClickButton = useCallback(() => {
    dispatch({ type: START_GAME, row, cell, mine });
  },[row, cell, mine])

  return (
    <StyledForm>
      <Label>세로 :</Label>
      <Input type="number" placeholder="세로" value={row} onChange={onChangeRow}/>
      <Label>가로 :</Label>
      <Input type="number" placeholder="가로" value={cell} onChange={onChangeCell}/>
      <Label>지뢰 :</Label>
      <Input type="number" placeholder="지뢰" value={mine} onChange={onChangeMines}/>
      <Button onClick={onClickButton}>시작</Button>
    </StyledForm>
  )
}

export default Form
