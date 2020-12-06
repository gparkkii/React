const React = require("react"),
      {useRef, useState} = React;

const NumberBaseball = () => {
    const [number, setNumber] = useState(Math.floor(Math.random()*9)),
          [value, setValue] = useState(''),
          [answer, setAnswer] = useState(''),
          [result, setResult] = useState(''),
          inputRef = useRef(null);

    const onSubmitInput = (e) => {
        e.preventDefault();
        setResult(value);
    };

    const onChangeInput = (e) => {
        e.preventDefault();
        setValue(e.currentTarget.value);
    };

    return(
        <>
            <form onSubmit={onSubmitInput}>
                <input type="number" ref={inputRef} value={value} onChange={onChangeInput} placeholder="숫자를 입력해주세요." />
                <button> 입력 </button>
                <div>{result}</div>
            </form>
        </>
    );
}

module.exports = NumberBaseball