import React from 'react';
import './ReviewPage.css';
import searchIcon from './search-icon.svg';
import Review from './Review.jsx';
import ReviewModal from './ReviewModal.jsx'

class ReviewPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }

    openModal = () => {
        this.setState({ isModalOpen: true});
    }

    closeModal = () => {
        this.setState({ isModalOpen: false});
    }

    render() {
        return(
            <>
                <div className="container">
                    <div className="review-header clearfix">
                        <div className="review-title">
                            <h2 className="review">모든 리뷰</h2>
                            <p className="review-number">(1,207)</p>
                        </div>
                        <button className="review-btn" onClick= {this.openModal}>
                            리뷰 작성
                        </button>
                        <ReviewModal isOpen={this.state.isModalOpen} close = {this.closeModal}/>
                    </div>
                    <form className="search-form clearfix">
                        <span className="search-icon">
                            <img src={searchIcon} alt="search" />
                        </span>
                        <input className="review-search" type="text" placeholder="리뷰를 검색하세요" />
                    </form>
                    <Review></Review>
                </div>
            </>
        ) 
    }
}

export default ReviewPage;