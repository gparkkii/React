const React = require('react'),
      {useState, useRef} = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.floor(Math.random()*9)),
            [second, setSecond] = useState(Math.floor(Math.random()*9)),
            [value, setValue] = useState(''),
            [result, setResult] = useState(''),
            inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }  
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(Number(value) === first * second) {    
            setResult(`정답 : ${value}`);
            setFirst(Math.floor(Math.random()*9));
            setSecond(Math.floor(Math.random()*9));
            setValue(``);
            inputRef.current.focus();
        } else {
            setResult(`땡`);
            setValue(``);
            inputRef.current.focus();
        }
    }
    return (<>
        <div>
            {first} 곱하기 {second}는?
        </div>
        <form onSubmit = {onSubmitForm}>
            <input ref = {inputRef} onChange = {onChangeInput} value = {value} />
            <button> 입력! </button>
        </form>
        <div>{result}</div>
    </>)
};

module.exports = GuGuDan