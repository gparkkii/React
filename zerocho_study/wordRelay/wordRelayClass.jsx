const React = require("react"),
      { Component } = React;

class WordRelayClass extends Component {
    state = {
        status : 'Class',
        word : '박지연',
        value : '',
        result : '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        this.state.word[this.state.word.length - 1] === this.state.value[0] ?
            this.setState({
                result : '딩동댕',
                word : this.state.value,
                value : '',
            }) & this.input.focus() :
            this.setState({
                result : '땡',
                value : '',
            }) & this.input.focus();
    };

    onRefInput = (c) => {
        this.input = c;
    };

    onChangeInput = (e) => {
        this.setState({value: e.currentTarget.value});
    }

    input;


    render() {
        return (
            <>
                <h2> 끝말잇기 {this.state.status} Version </h2>
                <div>{this.state.word}</div>
                <form onSubmit = {this.onSubmitForm}>
                    <input ref={this.onRefInput} value = {this.state.value} onChange = {this.onChangeInput} /> 
                    <button> 입력 </button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelayClass;