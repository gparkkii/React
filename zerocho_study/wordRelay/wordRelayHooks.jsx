const React = require("react"),
      { useState, useRef } = React;

const WordRelayHooks = () => {
    const [word, setWord] = useState("박지연"),
          [value, setValue] = useState(""),
          [result, setResult] = useState(""),
          inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        word[word.length - 1] === value[0]
            ? setResult('딩동댕') &
             setWord(value) &
             setValue('') &
             inputRef.current.focus()
            : setResult('땡') &
              setValue('') &
              inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value);
    };

    return (
        <>
            <h2>끝말잇기 Hooks Version</h2>
            <div>{word}</div>
            <form onSubmit = {onSubmitForm}>
                <input ref={inputRef} value = {value} onChange = {onChangeInput} /> 
                <button> 입력 </button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelayHooks;