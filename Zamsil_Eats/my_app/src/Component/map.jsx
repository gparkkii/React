import React, { useState } from 'react';
import { useRef } from 'react';

const Map = () => {
    const [value, setValue] = useState(""),
          [result, setResult] = useState(""),
           inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        setResult(value);
        setValue('');
        inputRef.current.focus();
    }

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value);
    };

    return (
        <div>
            <form onSubmit = {onSubmitForm}>
                <input ref = {inputRef} value = {value} onChange = {onChangeInput} type="text" placeholder="장소를 입력해주세요." />
                <button>입력</button>
                <div>{result}</div>
            </form>
        </div>
    )
}


export default Map;