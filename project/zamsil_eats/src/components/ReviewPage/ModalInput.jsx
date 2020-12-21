import React from 'react';
import StarRatings from './StarRatings';

class ModalInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            image: '',
            user: '',
            rating: '',
            content: '',
            posted: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.content);
        this.setState({
            id: '',
            image: '',
            user: '',
            rating: '',
            content: '',
            posted: ''
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return(
            <>
                <form className="modal-content" onSubmit={this.handleFormSubmit}>
                    <h2> 나의 별점은?</h2>
                    <div className="star-rating">
                        <StarRatings name="rating" onChange={this.handleValueChange} />
                    </div>
                    <p>리뷰 내용</p>
                    <textarea className="modal-textarea" name="content" onChange={this.handleValueChange} placeholder="평가는 익명으로 등록됩니다. 솔직한 후기를 남겨주세요."/>
                </form>
                <div className="modal-button">
                    <button onClick={this.props.close} onSubmit={this.handleFormSubmit}>리뷰 등록하기</button>
                </div>
            </>
        ) 
    }
}

export default ModalInput;


